import { UpdateComponent } from './component/update/update.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './component/add/add.component';
import { HomeComponent } from './component/home/home.component';
import { EditComponent } from './component/edit/edit.component';

const routes: Routes = [

  { path: "", redirectTo: '/home', pathMatch: 'full' },
  { path: "home", component: HomeComponent },             // list of students in this module
  { path: "add", component: AddComponent },               // adding new student
  { path: "update/:sid", component: UpdateComponent },     // updating existing student
  { path: "edit/:sid", component: EditComponent },         // get a single student

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }