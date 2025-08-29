import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ContactInfo {
  email: string;
  phone: string;
  cvUrl: string;
  emailIcon: string;
  phoneIcon: string;
}

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

@Component({
  selector: 'app-contactme',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.css'],
})
export class ContactmeComponent {
  contactInfo: ContactInfo = {
    email: 'raul29247@gmail.com',
    phone: '+593 97 896 7634',
    cvUrl: '/assets/cv.pdf',
    emailIcon: 'https://img.icons8.com/ios/25/mail.png',
    phoneIcon: 'https://img.icons8.com/ios/25/phone.png',
  };

  socialLinks: SocialLink[] = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/raul-silva-ba265b144/',
      icon: 'https://img.icons8.com/ios-glyphs/30/linkedin.png',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/RansilvaV29',
      icon: 'https://img.icons8.com/ios-glyphs/30/github.png'
    },
  ];
}
