import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Project {
  name: string;
  year: string;
  description: string;
  technologies: string[];
  images: string[];
  github?: string;
  githubFront?: string;
  githubBack?: string;
  preview?: string;
  adminCredentials?: string;
  userCredentials?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit, OnDestroy {
  projects: Project[] = [
    {
      name: 'Middleware para máquina de marcado láser industrial (SUNINE K-Series)',
      year: '2026',
      description: 'Middleware en Node.js que implementa el protocolo propietario del fabricante (tramas ASCII con checksum sobre TCP/IP) para controlar de forma remota una máquina de marcado láser CO2 industrial. Incluye un editor visual en Angular (SVG) para posicionar, rotar y escribir el contenido de los objetos a marcar de forma individual o agrupada, con persistencia local para compensar las limitaciones de lectura de estado del protocolo, y telemetría de producción en tiempo real (contadores y errores) mediante WebSockets.',
      technologies: ['Node.js', 'Angular', 'WebSocket', 'TCP/IP'],
      images: [],
    },
    {
      name: 'Sistema de gestión de tickets con definición de procesos',
      year: '2026',
      description: 'Aplicación web basada en microservicios para la gestión de tickets y definición de flujos de trabajo personalizados. Sistema escalable que permite configurar distintos tipos de tickets y procesos, más allá del soporte de TI. Incluye actualización de tickets en tiempo real, autenticación con Keycloak y despliegue con Docker.',
      technologies: ['Spring Boot', 'Angular', 'WebSocket', 'Keycloak', 'Docker', 'Microservicios'],
      images: [],
    },
    {
      name: 'Sistema de toma de inventario para materia prima',
      year: '2025',
      description: 'Plataforma que valida el inventario existente contra el inventario escaneado con pistolas lectoras de códigos de barras, extrayendo características de la materia prima y comparándolas con el peso real para verificar que las medidas sean correctas.',
      technologies: ['Node.js', 'Express', 'SQL Server', 'Angular'],
      images: [],
    },
    {
      name: 'Sistema de gestión de gimnasio',
      year: '2025',
      description: 'Aplicación web para administrar usuarios, membresías, seguimiento de peso, reservas de clases en tiempo real, ejercicios y rutinas personalizadas, con validaciones personalizadas y dos perfiles de usuario: administrador y cliente.',
      technologies: ['Angular', 'PostgreSQL', 'Spring Boot', 'WebSocket', 'Microservicios(Docker)'],
      images: ['assets/proyecto4-1.png', 'assets/proyecto4-2.png', 'assets/proyecto4-3.png', 'assets/proyecto4-4.png'],
      githubFront: 'https://github.com/Rabedon1/fitclubAngular',
      githubBack: 'https://github.com/RansilvaV29/GimnasioBackend',
      preview: 'https://fitclubangular.onrender.com',
      adminCredentials: 'raul29247@gmail.com: admin1',
      userCredentials: 'user@gmail.com: admin'
    },
    {
      name: 'Página de información de una boda + visor de fotos',
      year: '2025',
      description: 'Página de información para una boda, con un carrusel de fotos, conteo regresivo para la fecha y una sección para que los invitados suban fotografías del evento.',
      technologies: ['Angular', 'Firebase'],
      images: ['assets/proyecto1-1.jpeg', 'assets/proyecto1-2.jpeg'],
      github: 'https://github.com/RansilvaV29/Boda-cristina-jorge',
      preview: 'https://boda-cristina-jorge.web.app/'
    },
    {
      name: 'Visor de fotos con búsqueda de rostros',
      year: '2025',
      description: 'Complemento del proyecto de información para la boda, que permite buscar fotos por rostros utilizando la inteligencia artificial de AWS Rekognition.',
      technologies: ['React', 'Node.js', 'AWS', 'Rekognition'],
      images: ['assets/proyecto1-3.jpeg', 'assets/proyecto1-4.jpeg'],
      github: 'https://github.com/RansilvaV29/frontend-visorfotos',
      preview: 'https://frontend-visorfotos.onrender.com/'
    },
    {
      name: 'Sistema de gestión de licorería',
      year: '2024',
      description: 'Aplicación web para administrar una licorería, con seguimiento de inventario, gestión de ventas y organización del catálogo de productos.',
      technologies: ['React', 'Express', 'PostgreSQL'],
      images: [],
    },
    {
      name: 'Recopilación de requisitos para sistema de asistencia del Club de Software',
      year: '2024',
      description: 'Participación en el equipo responsable de recopilar y analizar los requisitos para un sistema de gestión de asistencia del Club de Software de la universidad: entrevistas, encuestas y talleres colaborativos, y documentación de requisitos funcionales y no funcionales.',
      technologies: ['Elicitación de Requisitos', 'UML'],
      images: [],
    },
    {
      name: 'Máquina expendedora en C++',
      year: '2023',
      description: 'Máquina expendedora hecha en C++ con el fin de practicar estructuras de datos, el credito es tomado de una hoja de texto, al igual que los productos, está programada para que cada que se ejecute el programa se genere un crédito aleatorio.',
      technologies: ['C++'],
      images: ['assets/proyecto2-2.png'],
      github: 'https://github.com/RansilvaV29/MaquinaExpendedora',
      preview: ''
    },
    {
      name: 'Ideart',
      year: '2022',
      description: 'Primer proyecto hecho en HTML, CSS y JavaScript, basado en un emprendimiento real, se sacaron los requerimientos del cliente real hace uso de una base de datos SQL para un CRUD basico.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PostgreSQL'],
      images: ['assets/proyecto3-1.png'],
      github: 'https://github.com/Rabedon1/WEB-14766',
      preview: ''
    }
  ];
  activeImageIndexes: number[] = [];
  intervalId?: any;

  filteredProjects: Project[] = [];
  allTechnologies: string[] = [];
  selectedTechnology: string = 'all';

  ngOnInit() {
    this.activeImageIndexes = this.projects.map(() => 0);
    this.intervalId = setInterval(() => {
      this.projects.forEach((proj, i) => {
        if (proj.images && proj.images.length > 1) {
          this.activeImageIndexes[i] = (this.activeImageIndexes[i] + 1) % proj.images.length;
        }
      });
    }, 2000);

    // Initialize filters
    this.filteredProjects = this.projects;
    const allTechs = this.projects.flatMap(p => p.technologies);
    this.allTechnologies = [...new Set(allTechs)];
  }

  ngOnDestroy() {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  onTechnologyChange() {
    if (this.selectedTechnology === 'all') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(p => p.technologies.includes(this.selectedTechnology));
    }
  }
}
