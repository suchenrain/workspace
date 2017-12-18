import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  public powers: Array<string> = ['Really Smart', 'Super flexiable', 'Super Hot', 'Weather Changer'];
  public model: Hero = new Hero(18, 'Nice', this.powers[0], 'Chunk Overstreet');

  public submitted = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmmit() {
    this.submitted = true;
  }
  /* just for development and will be removed after finishing */
  get diagnostic() {
    return JSON.stringify(this.model);
  }

}
