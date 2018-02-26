import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  /* NgIf */
  a = 1;
  b = 0;
  str = 'yes';

  myFunc() {
    return true;
  }
  /* NgSwitch:need to import common module;BrowserModule will import and export common module*/
  myVar: any = '1';
  increase() {
    this.myVar++;
  }
  decrease() {
    this.myVar--;
  }

  /* NgStyle: */
  color: string;
  fontSize: number;

  apply(color: string, size: number) {
    this.color = color;
    this.fontSize = size;
  }

  /* NgClass */
  isbordered: boolean;

  toggleBordered() {
    this.isbordered = !this.isbordered;
  }

  /* NgFor */
  cities: Array<string> = ['Miami', 'New York', 'Washington'];

  people: Array<any> = [
    { name: 'Pawn', age: 26, city: 'GuanZhou' },
    { name: 'Richard', age: 33, city: 'GuanZhou' },
    { name: 'Por', age: 27, city: 'GuanZhou' },

  ];

  peopleByCity: Array<any> = [
    {
      city: 'Miami', people: [
        { name: 'Pawn', age: 26 },
        { name: 'Por', age: 27 }
      ]
    },
    {
      city: 'New York', people: [
        { name: 'test', age: 23 },
        { name: 'sam', age: 35 }
      ]
    }
  ];

  /* NgNonBindable */
  content: string = 'some text';

}
