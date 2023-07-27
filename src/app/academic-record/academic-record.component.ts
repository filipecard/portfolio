import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-academic-record',
  templateUrl: './academic-record.component.html',
  styleUrls: ['./academic-record.component.css']
})
export class AcademicRecordComponent {
  constructor(
    public _themeService: ThemeService
  ){}
}
