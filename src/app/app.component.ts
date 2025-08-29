import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './components/home/home.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { EducationExperienceComponent } from './components/education-experience/education-experience.component';
import { ContactmeComponent } from './components/contactme/contactme.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    HomeComponent,
    AboutmeComponent,
    ProjectsComponent,
    EducationExperienceComponent,
    ContactmeComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showMenu = false;
  showBackToTop = false;

  // optional: close mobile menu on window resize > breakpoint
  @HostListener('window:resize') onResize() {
    if (window.innerWidth > 900 && this.showMenu) {
      this.showMenu = false;
    }
  }

  @HostListener('window:scroll') onScroll() {
    this.showBackToTop = window.scrollY > 300;
  }

  backToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 64; // offset for header
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }
}
