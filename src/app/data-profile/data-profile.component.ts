import { Component } from '@angular/core';

@Component({
  selector: 'app-data-profile',
  templateUrl: './data-profile.component.html',
  styleUrls: ['./data-profile.component.css']
})
export class DataProfileComponent {

  getAge(): number{
    const dateNasc = new Date('January 21, 2000').getFullYear();
    const dateNow = new Date().getFullYear();
    return dateNow - dateNasc;
  }

  redirectMyResume(){
    window.open("https://drive.google.com/file/d/1I0HxqlX-AuECO7sXzYYxlVEcEbq6qTDl/view?usp=sharing", "_blank");
  }

  redirectMyGithub(){
    window.open("https://github.com/filipecard", "_blank");
  }

  redirectMyInstagran(){
    window.open("https://www.instagram.com/filipe_caroli/", "_blank");
  }
}
