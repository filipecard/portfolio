import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { DataProfileComponent } from './data-profile/data-profile.component';
import { AcademicRecordComponent } from './academic-record/academic-record.component';
import { TechnicalKnowledgeComponent } from './technical-knowledge/technical-knowledge.component';
import { InfoContatoComponent } from './info-contato/info-contato.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    DataProfileComponent,
    AcademicRecordComponent,
    TechnicalKnowledgeComponent,
    InfoContatoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
