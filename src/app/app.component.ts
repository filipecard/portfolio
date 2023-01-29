import { ChoiceDataOptionService } from './services/choice-data-option.service';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    constructor(public choiceDataOptionService: ChoiceDataOptionService){

    }
    

} 

