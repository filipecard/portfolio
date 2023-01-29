import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChoiceDataOptionService {
  choice:number[] = [1,0,0,0];

  constructor() { 
    this.setChoiceOption(0);
  }

  setChoiceOption(value:number) {
    if (value == 0){
      this.choice = [1,0,0,0];
    } else if (value == 1){
      this.choice = [0,1,0,0];
    }else if (value == 2){
      this.choice = [0,0,1,0];
    }else if (value == 3){
      this.choice = [0,0,1,0];
    } else {
      this.choice = [0,0,0,1];
    }
  }

}
