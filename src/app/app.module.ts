import { ChoiceDataOptionService } from './services/choice-data-option.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { DataProfileComponent } from './data-profile/data-profile.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { AcademicRecordComponent } from './academic-record/academic-record.component';

@NgModule({
  declarations: [	
    AppComponent, DataProfileComponent, MenuBarComponent, AcademicRecordComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [ChoiceDataOptionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
