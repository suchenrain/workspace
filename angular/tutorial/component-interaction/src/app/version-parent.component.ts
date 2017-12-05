import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-version-parent',
  template: `
    <h2>Source Code Version</h2>
    <button (click)="newMajor()">New major version</button>
    <button (click)="newMinor()">New minor version</button>
    <app-version-child [major]=major [minor]=minor></app-version-child>
  `,
  styles: []
})
export class VersionParentComponent implements OnInit {

  major: number = 1;
  minor: number = 23;
  constructor() { }

  ngOnInit() {
  }
  newMajor() {
    this.major++;
    this.minor = 0;
  }
  newMinor() {
    this.minor++;
  }

}
