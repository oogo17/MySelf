import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { GoalsComponent } from './goals/goals.component';
import { ContactComponent } from './contact/contact.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      ProfileComponent,
      HobbiesComponent,
      GoalsComponent,
      ContactComponent,
      WorkExperienceComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
