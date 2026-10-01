import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ContactChannel {
  label: string;
  value: string;
  url: string;
  external?: boolean;
}

@Component({
  selector: 'app-contactme',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.css'],
})
export class ContactmeComponent {
  email = 'raul29247@gmail.com';

  channels: ContactChannel[] = [
    { label: 'Teléfono y WhatsApp', value: '+593 97 896 7634', url: 'https://wa.me/593978967634', external: true },
    {
      label: 'LinkedIn',
      value: 'raul-silva-ba265b144',
      url: 'https://www.linkedin.com/in/raul-silva-ba265b144/',
      external: true,
    },
    { label: 'GitHub', value: 'RansilvaV29', url: 'https://github.com/RansilvaV29', external: true },
    { label: 'Correo universitario', value: 'rasilva7@espe.edu.ec', url: 'mailto:rasilva7@espe.edu.ec' },
  ];
}
