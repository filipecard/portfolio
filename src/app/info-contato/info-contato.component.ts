import { Component } from '@angular/core';

@Component({
  selector: 'app-info-contato',
  templateUrl: './info-contato.component.html',
  styleUrls: ['./info-contato.component.css'],
  standalone: false
})
export class InfoContatoComponent {
  openLinkedIn(): void {
    window.open('https://www.linkedin.com/in/filipecarolidev/', '_blank', 'noopener');
  }

  openGitHub(): void {
    window.open('https://github.com/filipecard', '_blank', 'noopener');
  }

  openEmail(): void {
    window.open('mailto:cardosof19283745@gmail.com', '_blank');
  }

  openWhatsApp(): void {
    window.open('https://wa.me/5586981346155', '_blank', 'noopener');
  }
}
