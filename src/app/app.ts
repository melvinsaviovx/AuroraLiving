import { Component, signal } from '@angular/core';
import { Header } from './Component/header/header';
import { Footer } from './Component/footer/footer';
import { Home } from './Component/home/home';
@Component({
  selector: 'app-root',
  imports: [Header,Footer,Home],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('deandex');
}
