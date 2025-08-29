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
      title: 'Ingeniería en Software',
      institution: 'Universidad de las Fuerzas Armadas',
      period: '2021 - Actualidad',
      status: 'En curso'
    },
    {
      title: 'Diplomado en programación en Java',
      institution: 'Politécnico de Colombia',
      period: '2025',
      certificateUrl: 'https://politecnicodecolombia.edu.co/contable/app/certificados/pages/certificado.php?Id=9PvdWVq6BwwM4DyxJEZM'
    }
  ];

  experiences: Experience[] = [
    {
      position: 'Pasante programador',
      company: 'Agencia de regulación y control de Hidrocarburos',
      period: '2025 Marzo - 2025 Julio',
      description: 'Desarrollo full stack de una aplicacion web para el registro de abastecedoras de derivados hidrocarburiferos, con dos perfiles de usuario. El usuario registra la abastecedora y los administradores revisan la documentación para permitir la operación de la abastecedora a nivel nacional.',
      technologies: ['Angular', 'SpringBoot', 'WildFly', 'Oracle SQL']
    },
    {
      position: 'Participación en “Road to Start Hack”',
      company: '',
      period: '2022 - 2023',
      description: 'Participación en un hackatón colaborando con un equipo de estudiantes para desarrollar una solución innovadora en un tiempo limitado de 12 horas, aplicando metodologías ágiles y tecnologías web para la creación de un prototipo funcional.',
      technologies: ['Angular']
    }
  ];
}
