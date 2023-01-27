import { Component } from '@angular/core';

@Component({
  selector: 'app-data-profile',
  templateUrl: './data-profile.component.html',
  styleUrls: ['./data-profile.component.css']
})
export class DataProfileComponent {

  redirectMyResume(){
    window.open("https://drive.google.com/file/d/1z7U5NCXrN_frOULOeKuX-gR99xVLE0gN/view?usp=sharing", "_blank");
  }

  redirectMyGithub(){
    window.open("https://github.com/filipecard", "_blank");
  }

  redirectMyInstagran(){
    window.open("https://www.instagram.com/filipe_caroli/", "_blank");
  }
}
