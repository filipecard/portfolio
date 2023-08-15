import { ThemeService } from '../services/theme.service';
import { ChoiceDataOptionService } from './../services/choice-data-option.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})

export class MenuBarComponent {
  public choice: number = 0;

  set_choice(value:number){
    this.choice = value;
  }

  constructor(
    public choiceDataOptionService : ChoiceDataOptionService,
    public ThemeService: ThemeService
  ){}

}
