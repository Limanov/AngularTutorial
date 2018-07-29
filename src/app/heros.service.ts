import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Heros } from './heros';
import  { HEROSI } from './mock-herosi';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HerosService {

  constructor(private messageService: MessageService) { }
 
  getHerosi(): Observable<Heros[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HerosService: fetched herosi');
    return of(HEROSI);
  }
}