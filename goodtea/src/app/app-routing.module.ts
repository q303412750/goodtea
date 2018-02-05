import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ClassifyComponent } from './classify/classify.component';
import { ShopcarComponent } from './shopcar/shopcar.component';
import { MyComponent } from './my/my.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:'home',component:HomeComponent,
    children:[
      {path:"",redirectTo:"index",pathMatch:'full'},
      {path:"index",component:IndexComponent},
      {path:"classify",component:ClassifyComponent},
      {path:"shopcar",component:ShopcarComponent},
      {path:"my",component:MyComponent}
    ]
  },
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  
  {path:"**",component:NotFoundComponentComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
