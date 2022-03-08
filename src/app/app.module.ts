import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './admin/home/home.component';
import { HeaderComponent } from './admin/header/header.component';
import { FooterComponent } from './admin/footer/footer.component';
import { LoginComponent } from './admin/login/login.component';
import { SignupComponent } from './admin/signup/signup.component';
import { ContactComponent } from './admin/contact/contact.component';
import { BlogComponent } from './admin/blog/blog.component';
import { CategaryComponent } from './admin/categary/categary.component';
import { AskQuestionComponent } from './admin/ask-question/ask-question.component';
import { UserQuestionComponent } from './admin/user-question/user-question.component';
import { PostDetailsComponent } from './admin/post-details/post-details.component';
import { UserComponent } from './admin/user/user.component';
import { APIService } from './api.service';
import { CookieService } from './cookie.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    ContactComponent,
    BlogComponent,
    CategaryComponent,
    AskQuestionComponent,
    UserQuestionComponent,
    PostDetailsComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    

  ],
  providers: [APIService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
