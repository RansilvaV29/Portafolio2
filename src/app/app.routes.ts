import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { EducationExperienceComponent } from './components/education-experience/education-experience.component';
import { ContactmeComponent } from './components/contactme/contactme.component';

export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'aboutme', component: AboutmeComponent },
	{ path: 'projects', component: ProjectsComponent },
	{ path: 'education', component: EducationExperienceComponent },
	{ path: 'contact', component: ContactmeComponent },
];
