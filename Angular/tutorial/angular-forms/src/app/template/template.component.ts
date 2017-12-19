import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  submitted=false;
  powers = ["A", "B", "C", "D"];
  hero = new Hero(1, 'zh', this.powers[2], 'haha');

  constructor() { }

  ngOnInit() {
  }


}
