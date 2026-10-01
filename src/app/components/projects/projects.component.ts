import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit, OnDestroy {
  projects: Project[] = [
    {
      name: 'Middleware para marcadora láser industrial SUNINE K‑Series',
      year: '2026',
      description: 'Middleware en Node.js que implementa el protocolo propietario del fabricante (tramas ASCII con checksum sobre TCP/IP) para controlar de forma remota una máquina de marcado láser CO2 industrial. Incluye un editor visual en Angular (SVG) para posicionar, rotar y editar los objetos a marcar, y telemetría de producción en tiempo real mediante WebSockets.',
      technologies: ['Node.js', 'Angular', 'WebSockets', 'TCP/IP'],
      images: [],
    },
    {
      name: 'Sistema de gestión de tickets con definición de procesos',
      year: '2026',
      description: 'Aplicación web basada en microservicios para la gestión de tickets y definición de flujos de trabajo personalizados. Sistema escalable que permite configurar distintos tipos de tickets y procesos, más allá del soporte de TI. Incluye actualización de tickets en tiempo real, autenticación con Keycloak y despliegue con Docker.',
      technologies: ['Spring Boot', 'Angular', 'WebSockets', 'Keycloak', 'Docker', 'Microservicios'],
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
      technologies: ['Angular', 'PostgreSQL', 'Spring Boot', 'WebSockets', 'Docker'],
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
      description: 'Máquina expendedora hecha en C++ con el fin de practicar estructuras de datos, con crédito y productos leídos desde archivos de texto y un crédito aleatorio generado en cada ejecución.',
      technologies: ['C++'],
      images: ['assets/proyecto2-2.png'],
      github: 'https://github.com/RansilvaV29/MaquinaExpendedora',
      preview: ''
    },
    {
      name: 'Ideart',
      year: '2022',
      description: 'Mi primer proyecto web, para un emprendimiento real: levantamiento de requisitos con el cliente y un CRUD básico sobre una base de datos SQL.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PostgreSQL'],
      images: ['assets/proyecto3-1.png'],
      github: 'https://github.com/Rabedon1/WEB-14766',
      preview: ''
    }
  ];
  /** Índice de imagen visible por proyecto (clave: nombre). */
  activeImage: Record<string, number> = {};
  intervalId?: ReturnType<typeof setInterval>;

  filteredProjects: Project[] = [];
  allTechnologies: string[] = [];
  selectedTechnology = 'all';

  get gridProjects(): Project[] {
    return this.filteredProjects;
  }

  get mediaProjects(): Project[] {
    return this.gridProjects.filter(p => p.images.length);
  }

  get textProjects(): Project[] {
    return this.gridProjects.filter(p => !p.images.length);
  }

  ngOnInit() {
    this.projects.forEach(p => (this.activeImage[p.name] = 0));
    const reduce = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (!reduce) {
      this.intervalId = setInterval(() => {
        this.projects.forEach(p => {
          if (p.images.length > 1) {
            this.activeImage[p.name] = (this.activeImage[p.name] + 1) % p.images.length;
          }
        });
      }, 3500);
    }

    this.filteredProjects = this.projects;
    const counts = new Map<string, number>();
    this.projects.flatMap(p => p.technologies).forEach(t => counts.set(t, (counts.get(t) ?? 0) + 1));
    this.allTechnologies = [...counts.entries()]
      .filter(([, n]) => n > 1)
      .sort((a, b) => b[1] - a[1])
      .map(([t]) => t);
  }

  ngOnDestroy() {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  selectTechnology(tech: string) {
    this.selectedTechnology = tech;
    this.filteredProjects =
      tech === 'all' ? this.projects : this.projects.filter(p => p.technologies.includes(tech));
  }
}
