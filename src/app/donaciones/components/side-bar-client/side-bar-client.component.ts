import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-side-bar-client',
  templateUrl: './side-bar-client.component.html',
  styleUrls: ['./side-bar-client.component.css']
})
export class SideBarClientComponent implements OnInit {
  @ViewChild('sidebarele') public sidebarelem! : ElementRef;
  @Input('previsualizacion') public previsualizacion : string = "";
  public toggle: boolean = true;
  public icon: string = "../../../../assets/icons/🦆 icon _close outline_.svg";
  constructor(private render : Renderer2) { }
  ngOnInit(): void {
  }

  toggleSidebar(){
    const div = this.sidebarelem.nativeElement;
    if(this.toggle){
      this.render.setStyle(div, 'width', '50px');
      this.toggle = false;
      this.icon = "../../../../assets/icons/🦆 icon _menu_.svg";
    } else {
      this.render.setStyle(div, 'width', '225px');
      this.toggle = true;
      this.icon = "../../../../assets/icons/🦆 icon _close outline_.svg";
    }
    this.render.setStyle(div, 'transition', 'width 1s')
  }
}
