import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Technology {
  name: string;
  /** ruta relativa a /src/assets/ o URL pública opcional */
  icon?: string;
}

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent {
  technologies: Technology[] = [
    { name: 'HTML', icon: 'https://img.icons8.com/color/120/html-5.png' },
    { name: 'CSS', icon: 'https://img.icons8.com/color/120/css3.png' },
    { name: 'Angular', icon: 'https://img.icons8.com/color/120/angularjs.png' },
    { name: 'Spring Boot', icon: 'https://img.icons8.com/color/120/spring-logo.png' },
    { name: 'Java', icon: 'https://img.icons8.com/color/120/java-coffee-cup-logo--v1.png' },
    { name: 'PostgreSQL', icon: 'https://img.icons8.com/color/120/postgreesql.png' },
    { name: 'Firebase', icon: 'https://img.icons8.com/color/120/firebase.png' },
    { name: 'C++', icon: 'https://img.icons8.com/color/120/c-plus-plus-logo.png' }

  ];
}
