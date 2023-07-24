import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-data-profile',
  templateUrl: './data-profile.component.html',
  styleUrls: ['./data-profile.component.css']
})
export class DataProfileComponent {

  constructor(
    public _themeService: ThemeService
  ){}

  getAge(): number{
    const dateNasc = new Date('January 21, 2000').getFullYear();
    const dateNow = new Date().getFullYear();
    return dateNow - dateNasc;
  }

  redirectMyResume(){
    window.open("https://drive.google.com/file/d/1I0HxqlX-AuECO7sXzYYxlVEcEbq6qTDl/view?usp=sharing", "_blank");
  }

}
