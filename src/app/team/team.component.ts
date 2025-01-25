import { Component, ViewChild, viewChild } from '@angular/core';
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-team',
  imports: [ChildComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
  @ViewChild(ChildComponent)childElement!:ChildComponent
  showElement():void{
    this.childElement.data()
  }
}
