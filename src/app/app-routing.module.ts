import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { GoalsComponent } from './goals/goals.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'work-experience', component: WorkExperienceComponent},
  {path: 'hobbies', component: HobbiesComponent},
  {path: 'goals', component: GoalsComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
