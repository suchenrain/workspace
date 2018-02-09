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

}
