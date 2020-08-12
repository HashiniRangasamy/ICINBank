import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from '../app/login/login.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { AppComponent }  from './app.component';


const routes: Routes = [
  {path:'login',component: LoginComponent},
  {path:'registeration',component:RegisterationComponent},
  {path:'ICIN BANK',component:AppComponent},
  {path:"", redirectTo:"ICIN BANK",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
