import { Component, ElementRef, ViewChild,  } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @ViewChild('el')myElement!:ElementRef
  data():void{
    this.myElement.nativeElement.classList.add('d-none')
  }
}
