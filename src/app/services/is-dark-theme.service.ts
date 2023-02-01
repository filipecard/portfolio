import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IsDarkThemeService {
  public isDark: boolean = false;

  constructor() { 
    this.switchTheme();
  }

  switchTheme(){
    this.isDark = !this.isDark;
  }
}
