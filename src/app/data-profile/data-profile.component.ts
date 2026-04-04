import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-data-profile',
  templateUrl: './data-profile.component.html',
  styleUrls: ['./data-profile.component.css'],
  standalone: false
})
export class DataProfileComponent implements OnInit, OnDestroy {
  displayText = '';
  age = this.calcAge();

  private readonly roles = [
    'Full-Stack Developer',
    'Angular Developer',
    'TypeScript Developer',
    'Delphi Developer',
    'Python Developer',
  ];

  private roleIdx = 0;
  private charIdx = 0;
  private isDeleting = false;
  private timerId: any;

  ngOnInit(): void {
    this.typeLoop();
  }

  ngOnDestroy(): void {
    clearTimeout(this.timerId);
  }

  private typeLoop(): void {
    const current = this.roles[this.roleIdx];

    if (!this.isDeleting) {
      this.displayText = current.substring(0, this.charIdx + 1);
      this.charIdx++;
      if (this.charIdx === current.length) {
        this.isDeleting = true;
        this.timerId = setTimeout(() => this.typeLoop(), 2200);
        return;
      }
    } else {
      this.displayText = current.substring(0, this.charIdx - 1);
      this.charIdx--;
      if (this.charIdx === 0) {
        this.isDeleting = false;
        this.roleIdx = (this.roleIdx + 1) % this.roles.length;
      }
    }

    const speed = this.isDeleting ? 38 : 78;
    this.timerId = setTimeout(() => this.typeLoop(), speed);
  }

  private calcAge(): number {
    return new Date().getFullYear() - 2000;
  }

  downloadCV(): void {
    window.open('curriculo.pdf', '_blank');
  }

  scrollToContact(): void {
    const el = document.getElementById('contato');
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 68;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }
}
