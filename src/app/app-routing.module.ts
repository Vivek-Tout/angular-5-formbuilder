import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { CheckComponent } from './check/check.component';
import { EditAppComponent } from './edit-app/edit-app.component';
import { WelcomeComponent} from './welcome/welcome.component'

const routes: Routes = [
  {path: 'Check', component: CheckComponent},
  {path: 'EditApp', component: EditAppComponent},
  {path: 'welcome', component: WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
