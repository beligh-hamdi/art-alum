import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Art Alum';

  links = [
    {path: '/home', label: 'Accueil'},
    {path: '/catalogue', label: 'Catalogue'},
    {path: '/about', label: 'A propos'},
    {path: '/contact', label: 'Contact'}
  ]

}
