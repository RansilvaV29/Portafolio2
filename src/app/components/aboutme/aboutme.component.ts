import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Technology {
  name: string;
  icon?: string;
}

interface StackGroup {
  title: string;
  note: string;
  items: Technology[];
}

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css'],
})
export class AboutmeComponent {
  groups: StackGroup[] = [
    {
      title: 'Backend',
      note: 'APIs, microservicios y tiempo real',
      items: [
        { name: 'Spring Boot', icon: 'https://img.icons8.com/color/96/spring-logo.png' },
        { name: 'Java', icon: 'https://img.icons8.com/color/96/java-coffee-cup-logo--v1.png' },
        { name: 'Node.js', icon: 'https://img.icons8.com/color/96/nodejs.png' },
        { name: 'Express', icon: 'assets/icons/express.png' },
        { name: 'WebSockets' },
      ],
    },
    {
      title: 'Frontend',
      note: 'Interfaces de gestión y editores visuales',
      items: [
        { name: 'Angular', icon: 'https://img.icons8.com/color/96/angularjs.png' },
        { name: 'React', icon: 'https://img.icons8.com/color/96/react-native.png' },
        { name: 'TypeScript', icon: 'https://img.icons8.com/color/96/typescript.png' },
        { name: 'JavaScript', icon: 'https://img.icons8.com/color/96/javascript--v1.png' },
        { name: 'HTML y CSS', icon: 'https://img.icons8.com/color/96/html-5.png' },
      ],
    },
    {
      title: 'Datos',
      note: 'Modelado y consultas SQL',
      items: [
        { name: 'PostgreSQL', icon: 'https://img.icons8.com/color/96/postgreesql.png' },
        { name: 'SQL Server', icon: 'https://img.icons8.com/color/96/microsoft-sql-server.png' },
        { name: 'Oracle', icon: 'https://img.icons8.com/color/96/oracle-logo.png' },
        { name: 'Firebase', icon: 'https://img.icons8.com/color/96/firebase.png' },
      ],
    },
    {
      title: 'Infraestructura',
      note: 'Despliegue, seguridad y administración',
      items: [
        { name: 'Docker', icon: 'https://img.icons8.com/color/96/docker.png' },
        { name: 'Keycloak', icon: 'assets/icons/keycloak.png' },
        { name: 'WildFly', icon: 'assets/icons/wildfly.png' },
        { name: 'Git', icon: 'https://img.icons8.com/color/96/git.png' },
        { name: 'Linux', icon: 'https://img.icons8.com/color/96/linux--v1.png' },
        { name: 'Microsoft 365', icon: 'assets/icons/m365.png' },
      ],
    },
  ];

  languages = [
    { name: 'Español', level: 'Nativo' },
    { name: 'Inglés', level: 'Intermedio-avanzado' },
  ];
}
