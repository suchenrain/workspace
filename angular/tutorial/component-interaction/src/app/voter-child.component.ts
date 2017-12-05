import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-voter-child',
  template: `
    <h4>{{name}}</h4>
    <button (click)="vote(true)" [disabled]="voted">Agree</button>
    <button (click)="vote(false)" [disabled]="voted">Disagree</button>
  `,
  styles: []
})
export class VoterChildComponent implements OnInit {

  @Input() name: string;
  @Output() onVoted = new EventEmitter();

  voted = false;

  constructor() { }

  ngOnInit() {
  }
  vote(agreed: boolean) {
    this.onVoted.emit(agreed);
    this.voted = true;
  }

}
