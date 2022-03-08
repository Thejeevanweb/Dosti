import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AskQuestionComponent } from './admin/ask-question/ask-question.component';
import { HomeComponent } from './admin/home/home.component';
import { LoginComponent } from './admin/login/login.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"admin/login",component:LoginComponent},
  {path:"admin/ask-question",component:AskQuestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
