import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-meals',
  imports: [RouterLink,RouterOutlet,RouterLinkActive],
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.css'
})
export class MealsComponent {

}
