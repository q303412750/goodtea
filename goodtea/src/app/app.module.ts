import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { ClassifyComponent } from './classify/classify.component';
import { ShopcarComponent } from './shopcar/shopcar.component';
import { MyComponent } from './my/my.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import {HttpModule} from "@angular/http";
import { StoreService } from './service/store.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
<<<<<<< HEAD
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
=======
import { ClassdetailComponent } from './classdetail/classdetail.component';
>>>>>>> 6fdf2e8603dd7f355af7ca83e4e0511beb54e07d

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ClassifyComponent,
    ShopcarComponent,
    MyComponent,
    NotFoundComponentComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ClassdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [
    StoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
