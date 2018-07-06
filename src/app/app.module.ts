import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HerosiComponent } from './herosi/herosi.component';
import { DetaleHerosaComponent } from './detale-herosa/detale-herosa.component';

@NgModule({
  declarations: [
    AppComponent,
    HerosiComponent,
    DetaleHerosaComponent
  ],
  imports: [
    BrowserModule,
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
