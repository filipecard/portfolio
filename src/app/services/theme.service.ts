import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _dark = true;

  isDark(): boolean {
    return this._dark;
  }

  toggle(): void {
    this._dark = !this._dark;
  }

  /* Legacy compat – kept so other components don't break */
  getTheme(): string {
    return this._dark ? 'night' : 'day';
  }

  isThemeDay(): boolean {
    return !this._dark;
  }

  isThemeSunset(): boolean {
    return false;
  }

  isThemeNight(): boolean {
    return this._dark;
  }

  nextPeriod(): void {
    this.toggle();
  }
}
