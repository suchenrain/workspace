import { Component, OnInit, OnChanges, SimpleChange, Input } from '@angular/core';

@Component({
  selector: 'app-version-child',
  template: `
    <h3>Version:{{major}}.{{minor}}</h3>
    <h4>Change Log:</h4>
    <ul>
      <li *ngFor="let log of logs">{{log}}</li>
    </ul>
  `,
  styles: []
})
export class VersionChildComponent implements OnInit, OnChanges {

  @Input() major: number;
  @Input() minor: number;

  logs: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    let log: string[] = [];
    for (let propName in changes) {
      let changedProp = changes[propName];
      let to = JSON.stringify(changedProp.currentValue);
      if (changedProp.firstChange) {
        log.push(`Initial value of ${propName} set to ${to}`);
      } else {
        let from = JSON.stringify(changedProp.previousValue);
        log.push(`${propName} changed from ${from} to ${to}`);
      }
    }
    this.logs.push(log.join(', '));
  }

}
