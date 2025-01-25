import { Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { TeamComponent } from './team/team.component';
import { MealsComponent } from './meals/meals.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SeafoodComponent } from './seafood/seafood.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { PastaComponent } from './pasta/pasta.component';

export const routes: Routes = [
    {path:'',redirectTo:'contacts',pathMatch:'full',title:'Contacts'},
    {path:'contacts',component:ContactsComponent,title:'Contacts'},
    {path:'team',component:TeamComponent,title:'Team'},
    {path:'meals',component:MealsComponent,title:'Meals',children:[
        {path:'',redirectTo:'seafood',pathMatch:'full',title:'seafood'},
        {path:'seafood',component:SeafoodComponent,title:'seafood'},
        {path:'breakfast',component:BreakfastComponent,title:'breakfast'},
        {path:'pasta',component:PastaComponent,title:'pasta'},
        {path:'**',component:NotfoundComponent},
    ]},
    {path:'home',component:HomeComponent,title:'Home'},
    {path:'about',component:AboutComponent,title:'About'},
    {path:'**',component:NotfoundComponent,title:'Notfound'},
];
