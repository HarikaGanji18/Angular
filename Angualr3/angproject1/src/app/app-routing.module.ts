import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardDetailsComponent } from './card-details/card-details.component';
import { CardsComponent } from './cards/cards.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';

const routes: Routes = [
  {
    path:'',component:WelcomepageComponent
  },
  {
    path:'card/:id',component:CardDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
