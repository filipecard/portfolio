import { Component } from '@angular/core';

@Component({
  selector: 'app-technical-knowledge',
  templateUrl: './technical-knowledge.component.html',
  styleUrls: ['./technical-knowledge.component.css']
})
export class TechnicalKnowledgeComponent {
  public controllerHardSkills = true;
  public controllerSoftSkills = false;

  showCertificationPCAP(){
    window.open("https://drive.google.com/file/d/1p3NhapuQtVTiLH_NE11skitagzHf_21G/view?usp=sharing", "_blank");
  }
  showCertificationCodingTank(){
    window.open("https://drive.google.com/file/d/1FjZdFHC65bIBhz-_q_s1zW4K1TFUW3dg/view?usp=sharing", "_blank");
  }

  closeSoftSkills(){
    this.controllerHardSkills = true;
    this.controllerSoftSkills = false;
  }
  openSoftSkills(){
    this.controllerHardSkills = false;
    this.controllerSoftSkills = true;
  }
}
