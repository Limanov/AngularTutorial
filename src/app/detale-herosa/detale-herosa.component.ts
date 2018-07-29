import { Component, OnInit, Input } from '@angular/core';
import {Heros} from '../heros';

@Component({
  selector: 'app-detale-herosa',
  templateUrl: './detale-herosa.component.html',
  styleUrls: ['./detale-herosa.component.css']
})
export class DetaleHerosaComponent implements OnInit {

@Input() heros: Heros;
  constructor() { }

  ngOnInit() {
  }

}
