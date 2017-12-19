import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '../shared/forbidden-name.directive';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];

  hero = { name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0] };
  
  public heroForm: FormGroup

  constructor() {
    this.heroForm = new FormGroup({
      'name': new FormControl(this.hero.name, [
        Validators.required,
        Validators.minLength(4),
        forbiddenNameValidator(/test/i)
      ]),
      'alterEgo': new FormControl(this.hero.alterEgo),
      'power': new FormControl(this.hero.power, Validators.required)
    });
  }

  ngOnInit() {

  }
  get name() {
    return this.heroForm.get('name');
  }
  get power() {
    return this.heroForm.get('power');
  }
}
