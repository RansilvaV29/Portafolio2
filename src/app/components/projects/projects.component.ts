import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

interface Project {
  name: string;
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
  imports: [CommonModule, MatSelectModule, MatFormFieldModule, FormsModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit, OnDestroy {
  projects: Project[] = [
    {
      name: 'Página de administracion de un Gimnasio',
      description: 'Página de administración para un gimnasio, con un sistema de gestión de usuarios, reservas de clases en tiempo real y seguimiento de progreso, con dos perfiles de usuario: administrador y cliente.',
      technologies: ['Angular', 'PostgreSQL', 'SpringBoot', 'WebSocket', 'Microservicios(Docker)'],
      images: ['assets/proyecto4-1.png', 'assets/proyecto4-2.png', 'assets/proyecto4-3.png', 'assets/proyecto4-4.png'],
      githubFront: 'https://github.com/Rabedon1/fitclubAngular',
      githubBack: 'https://github.com/RansilvaV29/GimnasioBackend',
      preview: 'https://fitclubangular.onrender.com',
      adminCredentials: 'raul29247@gmail.com: admin1',
      userCredentials: 'user@gmail.com: admin'
    },
    {
      name: 'Página de información de una boda + visor de fotos',
      description: 'Página de información para una boda, con un carrusel de fotos, conteo regresivo para la fecha y una sección para que los invitados suban fotografías del evento.',
      technologies: ['Angular', 'Firebase'],
      images: ['assets/proyecto1-1.jpeg', 'assets/proyecto1-2.jpeg'],
      github: 'https://github.com/RansilvaV29/Boda-cristina-jorge',
      preview: 'https://boda-cristina-jorge.web.app/'
    },
    {
      name: 'Visor de fotos con búsqueda de rostros',
      description: 'Complemento del proyecto de información para la boda, que permite buscar fotos por rostros utilizando la inteligencia artificial de AWS Rekognition.',
      technologies: ['React', 'Node.js', 'AWS', 'Rekognition'],
      images: ['assets/proyecto1-3.jpeg', 'assets/proyecto1-4.jpeg'],
      github: 'https://github.com/RansilvaV29/frontend-visorfotos',
      preview: 'https://frontend-visorfotos.onrender.com/'
    },
    {
      name: 'Máquina expendedora en C++',
      description: 'Máquina expendedora hecha en C++ con el fin de practicar estructuras de datos, el credito es tomado de una hoja de texto, al igual que los productos, está programada para que cada que se ejecute el programa se genere un crédito aleatorio.',
      technologies: ['C++'],
      images: ['assets/proyecto2-2.png'],
      github: 'https://github.com/RansilvaV29/MaquinaExpendedora',
      preview: ''
    },
    {
      name: 'Ideart',
      description: 'Primer proyecto hecho en HTML, CSS y JavaScript, basado en un emprendimiento real, se sacaron los requerimientos del cliente real hace uso ed una base de datos SQL para un CRUD basico.',
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
