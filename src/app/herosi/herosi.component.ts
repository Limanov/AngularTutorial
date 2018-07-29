import { Component, OnInit } from '@angular/core';

import {Heros} from '../heros';
import { HerosService } from '../heros.service';


@Component({
  selector: 'app-herosi',
  templateUrl: './herosi.component.html',
  styleUrls: ['./herosi.component.css']
})
export class HerosiComponent implements OnInit {

herosi: Heros[];

wybranyHeros: Heros;

  constructor(private herosService: HerosService) { }
  
  ngOnInit() {
  this.getHerosi();
  }
 
  onSelect(heros: Heros):void{
	  this.wybranyHeros = heros;
  } 
  // getHerosi(): void {
	  // this.herosi = this.herosSerivce.getHerosi();
	  getHerosi(): void {
   this.herosService.getHerosi()
       .subscribe(herosi => this.herosi = herosi);
  }
}

