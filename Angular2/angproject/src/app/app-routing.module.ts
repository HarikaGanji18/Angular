import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Student3 } from './models/student3';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { Student3Component } from './student3/student3.component';

const routes: Routes = [
  {
    path:'',component:Student3Component
  },
  {
    path:'**',component:ErrorpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
