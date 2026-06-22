import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Technology {
  name: string;
  /** ruta relativa a /src/assets/ o URL pública opcional */
  icon?: string;
}

interface LevelItem {
  name: string;
  level: number; // 0-100
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
    { name: 'Angular', icon: 'https://img.icons8.com/color/120/angularjs.png' },
    { name: 'React', icon: 'https://img.icons8.com/color/120/react-native.png' },
    { name: 'Spring Boot', icon: 'https://img.icons8.com/color/120/spring-logo.png' },
    { name: 'Node.js', icon: 'https://img.icons8.com/color/120/nodejs.png' },
    { name: 'Java', icon: 'https://img.icons8.com/color/120/java-coffee-cup-logo--v1.png' },
    { name: 'TypeScript', icon: 'https://img.icons8.com/color/120/typescript.png' },
    { name: 'PostgreSQL', icon: 'https://img.icons8.com/color/120/postgreesql.png' },
    { name: 'SQL Server', icon: 'https://img.icons8.com/color/120/database.png' },
    { name: 'Docker', icon: 'https://img.icons8.com/color/120/docker.png' },
    { name: 'Firebase', icon: 'https://img.icons8.com/color/120/firebase.png' },
    { name: 'HTML5', icon: 'https://img.icons8.com/color/120/html-5.png' },
    { name: 'CSS3', icon: 'https://img.icons8.com/color/120/css3.png' },
    { name: 'C++', icon: 'https://img.icons8.com/color/120/c-plus-plus-logo.png' },
  ];

  languages: LevelItem[] = [
    { name: 'Español', level: 100 },
    { name: 'Inglés', level: 75 },
  ];

  programmingLanguages: LevelItem[] = [
    { name: 'Angular', level: 90 },
    { name: 'Spring Boot', level: 85 },
    { name: 'JavaScript / TypeScript', level: 85 },
    { name: 'SQL', level: 80 },
    { name: 'React', level: 80 },
    { name: 'HTML / CSS', level: 90 },
    { name: 'C++', level: 70 },
  ];

  skills: LevelItem[] = [
    { name: 'Backend', level: 95 },
    { name: 'Elicitación de Requisitos', level: 85 },
    { name: 'Microservicios', level: 80 },
    { name: 'UI/UX', level: 70 },
    { name: 'Programación Paralela', level: 70 },
  ];
}
