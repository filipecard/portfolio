import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _timePeriod: string[] = ['day', 'sunset', 'night'];
  private _indexPeriod = 0;

  constructor() {
    this.getTheme();
  }

  getTheme(){
    return this._timePeriod[this._indexPeriod];
  }

  nextPeriod(){

    this._indexPeriod += 1;
    this._indexPeriod > 2 ? this._indexPeriod = 0 : null;
  }
}
