import { Component } from '@angular/core';
import { AboutmeComponent } from "../aboutme/aboutme.component";
import { ProjectsComponent } from "../projects/projects.component";
import { EducationExperienceComponent } from "../education-experience/education-experience.component";
import { ContactmeComponent } from "../contactme/contactme.component";

@Component({
  selector: 'app-home',
  imports: [AboutmeComponent, ProjectsComponent, EducationExperienceComponent, ContactmeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
