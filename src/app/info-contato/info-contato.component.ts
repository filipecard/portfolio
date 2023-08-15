import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-info-contato',
  templateUrl: './info-contato.component.html',
  styleUrls: ['./info-contato.component.css']
})
export class InfoContatoComponent {
  constructor(
    public themeService: ThemeService
  ) {
    console.log(this.windowSizeLarge)
  }

  public windowSizeLarge = screen.width > 700;



  redirectToLinkedin(){
    window.open("https://www.linkedin.com/in/filipecarolidev/", "_blank");
  }

  redirectToGithub(){
    window.open("https://github.com/filipecard", "_blank");
  }

  redirectToEmail(){
    window.open('mailto:filipecardosooliveira@hotmail.com', "_blank")
  }

}

