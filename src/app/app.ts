import { Component, signal } from '@angular/core';
import { Header } from './Component/header/header';
import { Footer } from './Component/footer/footer';
import { Home } from './Component/home/home';
import { Services } from './Component/services/services';
import { Team } from './Component/team/team';
import { Portfolio } from './Component/portfolio/portfolio';
import { Contact } from './Component/contact/contact';

@Component({
  selector: 'app-root',
  imports: [Header,Footer,Home,Services,Team,Portfolio,Contact],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('deandex');
}
