import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { EducationExperienceComponent } from './components/education-experience/education-experience.component';
import { ContactmeComponent } from './components/contactme/contactme.component';

interface NavLink {
  id: string;
  label: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HomeComponent,
    AboutmeComponent,
    ProjectsComponent,
    EducationExperienceComponent,
    ContactmeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  menuOpen = false;
  scrolled = false;
  year = new Date().getFullYear();

  links: NavLink[] = [
    { id: 'stack', label: 'Stack' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'education', label: 'Trayectoria' },
    { id: 'contact', label: 'Contacto' },
  ];

  @HostListener('window:scroll') onScroll() {
    this.scrolled = window.scrollY > 8;
  }

  @HostListener('window:resize') onResize() {
    if (window.innerWidth > 860 && this.menuOpen) {
      this.menuOpen = false;
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
