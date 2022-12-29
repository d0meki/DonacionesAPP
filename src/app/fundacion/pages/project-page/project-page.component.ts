import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { FundacionService } from '../../services/fundacion.service';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {
  @ViewChild('opacity') public divarelem! : ElementRef;

  private files : any[] = [];
  private foundation_id : number = 0;
  public progressState : boolean = false;
  public customForm : FormGroup = this.formBuilder.group({
    'name': ['', [Validators.required, ]],
    'reason': ['', [Validators.required, ]],
    'description': [ '',Validators.required],
    'requested_amount': [0, [Validators.required]],
    'project_type': ['', [Validators.required]],
    'bank': ['', Validators.required],
    'number_acount': ['', Validators.required],
    'foundation_id': ['', Validators.required],
    'photos': [[], [Validators.required, Validators.minLength(2)]],
    "publication_date": ["2022-08-12", [Validators.required]],
    'state': [false]
  });
  constructor(private formBuilder : FormBuilder, private fundacionService : FundacionService, private authService : AuthService, private router : Router, private render : Renderer2) { }

  ngOnInit(): void {
    const user = this.authService.user;
    this.foundation_id = user.person.foundation.id;
    this.customForm.patchValue({ foundation_id: this.foundation_id });
   
  }
  fieldValidator(field: string) {
    return this.customForm.controls[`${field}`].errors && this.customForm.controls[`${field}`].touched;
  }
  submitProject() {
    if (this.files.length > 1) {
      this.customForm.patchValue({ photos: ["1", "2"] })
    }
    if (this.customForm.invalid) {
      this.customForm.markAllAsTouched();
    } else {
      this.progressState = true;
      this.progress();
      let array : string[] = [];
      this.files.forEach( (image: any, index: number) => {
        this.uploadImage(index, array);
      });
      setTimeout(() => {
        this.fundacionService.createProject(this.customForm.value)
        .subscribe( res => {
          console.log(res);
          console.log(this.customForm.value)
          this.progressState = false;
          this.router.navigate(['fundacion/home'])
        })
      }, 2000);
    }
  }
  addImage(image: any, number: number) {
    this.files[number] = image;
    console.log(this.files);
  }

  uploadImage(index: number, array: string[]) {
    const fileImages = new FormData();
    fileImages.append('file', this.files[index]);
    fileImages.append('upload_preset', 'donaciones_cloudinary');
    fileImages.append('cloud_name', this.fundacionService.cloudinaryKey)
    this.fundacionService.uploadImage(fileImages)
      .subscribe((res) => {
        array.push(res.url);
        this.customForm.patchValue({ photos: array })
      })
  }
  changeProjectType(event: any){
    this.customForm.patchValue({project_type : event.target.value})
  }
  //progress
  progress(){
    const div = this.divarelem.nativeElement;
    if(this.progressState)
    this.render.setStyle(div, 'opacity', '0.5');
    else
      this.render.setStyle(div, 'opacity','1');
  }
}
