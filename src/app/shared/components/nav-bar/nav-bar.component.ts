import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public image : string = "";
  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit(): void {
    if(this.authService.user){
      this.image = this.authService.user.person.foto;
    }
  }

  isLogged(){
    return this.authService.isLogged();
  }

  goToHome(){
    const type =  this.authService.user_type;
    if(type === "fundacion")
    this.router.navigate(['fundacion/home']);
    if(type === "donador")
    this.router.navigate(['donador/home']);
  }
  logOut(){
    this.image = "";
    this.authService.logOut();
  }

}
