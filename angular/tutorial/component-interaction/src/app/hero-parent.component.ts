import { Component, OnInit } from '@angular/core';
import { HEROS } from "./hero";

@Component({
  selector: 'app-hero-parent',
  templateUrl: './hero-parent.component.html',
  styleUrls: ['./hero-parent.component.css']
})
export class HeroParentComponent implements OnInit {

  heros = HEROS;
  master = 'Master';

  constructor() { }

  ngOnInit() {
  }

}
