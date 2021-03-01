import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { CheckComponent } from './check/check.component';
import { EditAppComponent } from './edit-app/edit-app.component';

const routes: Routes = [
  {path: 'Check', component: CheckComponent},
  {path: 'EditApp', component: EditAppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
