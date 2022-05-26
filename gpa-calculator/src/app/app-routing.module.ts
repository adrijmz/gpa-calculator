import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { NewGradeComponent } from './components/new-grade/new-grade.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {path:'', component: UserComponent}, 
  {path:'new-user', component: NewUserComponent},
  {path:'list', component: ListComponent},
  {path:'new-grade', component: NewGradeComponent},
  {path:'**', redirectTo:"", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
