import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // <-- Import RouterModule

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {
isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    const nav = document.querySelector('.nav-links');
    if (nav) {
      nav.classList.toggle('active', this.isMenuOpen);
    }
  }
}
