import { ChoiceDataOptionService } from './services/choice-data-option.service';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { Component } from '@angular/core';
import { IsDarkThemeService } from './services/is-dark-theme.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(
    public choiceDataOptionService: ChoiceDataOptionService,
    public themeService: IsDarkThemeService
    ) {}

  public themeName = ['dark_mode', 'light_mode']

  public runAnimation() {
    this.themeService.switchTheme();
    var div = document.getElementById('maindiv');
    if (div) this.themeService.isDark ?  div.className = 'workpage-day' : div.className = 'workpage-night';
  }
}

