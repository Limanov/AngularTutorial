import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HerosiComponent } from './herosi/herosi.component';
import { DetaleHerosaComponent } from './detale-herosa/detale-herosa.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    HerosiComponent,
    DetaleHerosaComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
