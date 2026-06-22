import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface HeroStat {
  value: string;
  label: string;
}

interface HeroLink {
  name: string;
  url: string;
  icon: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  stats: HeroStat[] = [
    { value: '4+', label: 'años de experiencia en código' },
    { value: '8', label: 'proyectos full stack' },
    { value: '5', label: 'certificaciones' },
  ];

  socialLinks: HeroLink[] = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/raul-silva-ba265b144/', icon: 'https://img.icons8.com/ios-glyphs/30/ffffff/linkedin.png' },
    { name: 'GitHub', url: 'https://github.com/RansilvaV29', icon: 'https://img.icons8.com/ios-glyphs/30/ffffff/github.png' },
    { name: 'Email', url: 'mailto:raul29247@gmail.com', icon: 'https://img.icons8.com/ios-glyphs/30/ffffff/new-post.png' },
  ];

  scrollToContact(event: Event) {
    event.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }
}
