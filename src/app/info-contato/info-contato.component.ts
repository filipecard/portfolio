import { Component } from '@angular/core';

@Component({
  selector: 'app-info-contato',
  templateUrl: './info-contato.component.html',
  styleUrls: ['./info-contato.component.css']
})
export class InfoContatoComponent {


  // redirectToWhatsapp(){
  //   window.open("https://wa.me/5586981346155", "_blank");
  // }

  redirectToLinkedin(){
    window.open("https://www.linkedin.com/in/filipecarolidev/", "_blank");
  }

  redirectToGithub(){
    window.open("https://github.com/filipecard", "_blank");
  }


}

