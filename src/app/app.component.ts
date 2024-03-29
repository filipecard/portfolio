import { ChoiceDataOptionService } from './services/choice-data-option.service';
import { Component } from '@angular/core';
import { ThemeService } from './services/theme.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(
    public choiceDataOptionService: ChoiceDataOptionService,
    public themeService: ThemeService
    ) {}

  public themeName = ['light_mode', 'wb_twilight', 'dark_mode']

  public runAnimation() {
    this.themeService.nextPeriod();

    var div = document.getElementById('maindiv');

    if (div) {
      switch (this.themeService.getTheme()) {
        case 'day':
          div.className = 'workpage workpage-day'
          break;
        case 'sunset':
          div.className = 'workpage workpage-sunset'
          break;
        case 'night':
          div.className = 'workpage workpage-night'
          break;
      }
    }
  }
}

