import { Component, HostListener, OnInit } from '@angular/core';
import { ThemeService } from '../services/theme.service';

interface NavLink {
  label: string;
  id: string;
  num: string;
}

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css'],
  standalone: false
})
export class MenuBarComponent implements OnInit {
  isScrolled = false;
  isMobileOpen = false;
  activeSection = 'inicio';

  navLinks: NavLink[] = [
    { label: 'Início',        id: 'inicio',      num: '01' },
    { label: 'Experiência',   id: 'experiencia', num: '02' },
    { label: 'Habilidades',   id: 'habilidades', num: '03' },
    { label: 'Contato',       id: 'contato',     num: '04' },
  ];

  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {
    this.onScroll();
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.isScrolled = window.scrollY > 24;
    this.updateActiveSection();
  }

  private updateActiveSection(): void {
    const offset = 120;
    for (let i = this.navLinks.length - 1; i >= 0; i--) {
      const el = document.getElementById(this.navLinks[i].id);
      if (el && el.getBoundingClientRect().top <= offset) {
        this.activeSection = this.navLinks[i].id;
        return;
      }
    }
    this.activeSection = 'inicio';
  }

  scrollTo(id: string): void {
    this.isMobileOpen = false;
    const el = document.getElementById(id);
    if (!el) return;
    const navH = 68;
    const top = el.getBoundingClientRect().top + window.pageYOffset - navH;
    window.scrollTo({ top, behavior: 'smooth' });
  }

  toggleMobile(): void {
    this.isMobileOpen = !this.isMobileOpen;
  }
}
