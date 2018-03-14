import { Component } from '@angular/core';
import { Utilities } from '@Chen/Common';

@Component({
  selector: 'inventory-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    console.log(Utilities.uuid());
  }

}
