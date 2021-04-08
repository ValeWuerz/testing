import { Component, OnInit } from '@angular/core';
import interact from 'interactjs'
@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {
toggle=0;
  constructor() { }

  ngOnInit(): void {
    this.dragging();
  }
testen(){
 let pic= document.getElementById("full");
 switch(this.toggle) {
  case this.toggle=0:
    pic.style.width="100%";
    this.toggle=1;
    break;
  case this.toggle=1:
    pic.style.width="50%";
    this.toggle=0;
    break;
  default:
    // code block
}

}
dragging(){
  const position = { x: 0, y: 0 }
  const position2 = { x: 0, y: 0 }

  interact('.draggable').draggable({
    listeners: {
      start (event) {
        console.log(event.type, event.target)
      },
      move (event) {
        position.x += event.dx
        position.y += event.dy

  
        event.target.style.transform =
          `translate(${position.x}px, ${position.y}px)`
      },
    }
  }) 
  interact('.draggable2').draggable({
    listeners: {
      start (event) {
        console.log(event.type, event.target)
      },
      move (event) {
        position2.x += event.dx
        position2.y += event.dy

  
        event.target.style.transform =
          `translate(${position2.x}px, ${position2.y}px)`
      },
    }
  })
}
}