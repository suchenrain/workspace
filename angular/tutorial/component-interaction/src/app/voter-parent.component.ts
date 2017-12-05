import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voter-parent',
  template: `
  <h2>Should mankind colonize the Universe?</h2>
  <h3>Agree: {{agreed}}, Disagree: {{disagreed}}</h3>
  <app-voter-child *ngFor="let voter of voters" [name]="voter" (onVoted)=onVoted($event)></app-voter-child>
  `,
  styles: []
})
export class VoterParentComponent implements OnInit {

  agreed = 0;
  disagreed = 0;

  voters = ["Chen", "Zhuang", "Haru"]
  constructor() { }

  ngOnInit() {
  }
  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }
}
