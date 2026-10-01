import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Education {
  title: string;
  institution: string;
  period: string;
  status?: string;
  certificateUrl?: string;
}

interface Experience {
  position: string;
  company: string;
  period: string;
  description: string;
  technologies?: string[];
}

@Component({
  selector: 'app-education-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education-experience.component.html',
  styleUrls: ['./education-experience.component.css']
})
export class EducationExperienceComponent {
  educations: Education[] = [
    {
      title: 'Ingeniería de Software',
      institution: 'Universidad de las Fuerzas Armadas (ESPE)',
      period: '2021 - 2026',
      status: 'En curso'
    },
    {
      title: 'Diplomado Avanzado en Criptografía',
      institution: 'Alison',
      period: '2026'
    },
    {
      title: 'Diplomado en programación en Java',
      institution: 'Politécnico de Colombia',
      period: '2025',
      certificateUrl: 'https://politecnicodecolombia.edu.co/contable/app/certificados/pages/certificado.php?Id=9PvdWVq6BwwM4DyxJEZM'
    },
    {
      title: 'Certified Ethical Hacker (CEH)',
      institution: 'Cisco Networking Academy',
      period: '2025'
    },
    {
      title: 'Certificación Linux Essentials',
      institution: 'Cisco Networking Academy',
      period: '2025'
    }
  ];

  experiences: Experience[] = [
    {
      position: 'Desarrollador Jr.',
      company: 'Etimet Cía. Ltda.',
      period: 'Sep. 2025 - Actualidad',
      description: 'Desarrollo Full Stack de una plataforma para el control de producción en la industria de etiquetas, incluyendo la gestión de inventario y el consumo de materia prima. Monitoreo y administración de la infraestructura de red y servidor de la empresa, además de la administración del entorno Microsoft 365 y gestión de usuarios.',
      technologies: ['Angular', 'Node.js', 'Express', 'SQL Server', 'WebSockets', 'Microsoft 365']
    },
    {
      position: 'Pasante de Desarrollo de Software',
      company: 'Agencia de Regulación y Control de Hidrocarburos (ARCH)',
      period: 'Mar. 2025 - Ago. 2025',
      description: 'Participación en el desarrollo Full Stack de una plataforma web para el registro y autorización de abastecedoras de derivados hidrocarburíferos, con perfiles de usuario y administrador. Levantamiento y análisis de requisitos funcionales, desarrollo del backend con Spring Boot y del frontend con Angular, y despliegue en ambiente de pruebas con WildFly.',
      technologies: ['Angular', 'Spring Boot', 'WildFly', 'Oracle SQL']
    },
    {
      position: 'Participante',
      company: 'Hackatón "Road to Start Hack"',
      period: 'Feb. 2025',
      description: 'Participación en un hackatón orientado al desarrollo de soluciones innovadoras en un período de 12 horas, aplicando metodologías ágiles para la planificación y ejecución del proyecto y desarrollando un prototipo funcional con tecnologías web.',
      technologies: ['Angular']
    },
    {
      position: 'Crew Member',
      company: "McDonald's",
      period: '2021 - 2023',
      description: 'Atención al cliente y resolución de incidencias en un entorno de alta demanda. Trabajo colaborativo para garantizar la eficiencia operativa del establecimiento, gestión del tiempo y cumplimiento de estándares de calidad, higiene y seguridad alimentaria.',
    }
  ];
}
