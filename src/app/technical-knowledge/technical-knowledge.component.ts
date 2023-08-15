import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-technical-knowledge',
  templateUrl: './technical-knowledge.component.html',
  styleUrls: ['./technical-knowledge.component.css']
})
export class TechnicalKnowledgeComponent {
  constructor(
    public themeService: ThemeService
  ) {}

  public controllerHardSkills = true;
  public controllerSoftSkills = false;

  showCertificationPCAP(){
    window.open("https://drive.google.com/file/d/1p3NhapuQtVTiLH_NE11skitagzHf_21G/view?usp=sharing", "_blank");
  }
  showCertificationCodingTank(){
    window.open("https://drive.google.com/file/d/1FjZdFHC65bIBhz-_q_s1zW4K1TFUW3dg/view?usp=sharing", "_blank");
  }

  closeSoftSkills(){
    this.controllerSoftSkills = false;
  }
  closeHardSkills(){
    this.controllerHardSkills = false;
  }
}
