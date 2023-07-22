import { ChoiceDataOptionService } from './services/choice-data-option.service';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(public choiceDataOptionService: ChoiceDataOptionService) {

  }

  public darkMode: boolean = false;
  public themeName = ['dark_mode', 'light_mode']

  public runAnimation() {
    this.darkMode = !this.darkMode;
    var div = document.getElementById('maindiv');
    if (div) this.darkMode ? div.className = 'workpage-night' : div.className = 'workpage-day';
  }
}

