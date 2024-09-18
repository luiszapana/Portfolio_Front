import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewExperienceComponent } from './components/experience/new-experience.component';
import { EditExperienceComponent } from './components/experience/edit-experience.component';
import { NewEducationComponent } from './components/education/new-education.component';
import { EditEducationComponent } from './components/education/edit-education.component';
import { NewSkillComponent } from './components/hss/new-skill.component';
import { EditSkillComponent } from './components/hss/edit-skill.component';
import { EditAboutComponent } from './components/about/edit-about.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'newexperience', component: NewExperienceComponent},
  {path: 'editexperience/:id', component: EditExperienceComponent},
  {path: 'neweducation', component: NewEducationComponent},
  {path: 'editeducation/:id', component: EditEducationComponent},
  {path: 'newskill', component: NewSkillComponent},
  {path: 'editskill/:id', component: EditSkillComponent},
  {path: 'editabout/:id', component: EditAboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
