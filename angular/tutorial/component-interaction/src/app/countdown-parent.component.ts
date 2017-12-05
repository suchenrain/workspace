import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CountdownTimerComponent } from "./countdown-timer.component";
/* Local variable, #timer, version */
@Component({
  selector: 'app-countdown-parent-lv',
  template: `
   <h3>Countdown to Liftoff (via local variable)</h3>
   <button (click)='timer.start()'>start</button>
   <button (click)='timer.stop()'>stop</button>
   <div class='timer'>{{timer.seconds}}</div>
   <app-countdown-timer ref-timer></app-countdown-timer>
  `,
  styles: [`.timer{line-height: 20px;
  height: 20px;
  border: 1px solid #ccc;
  width: 30px;
  text-align: center;
  margin: 10px 5px;
  background: #000;
  color: #04f3a8;}`]
})
export class CountdownParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

/* view child version */
@Component({
  selector: "app-countdown-parent-vc",
  template: `
  <h3>Countdown to Liftoff (via ViewChild)</h3>
  <button (click)="start()">Start</button>
  <button (click)="stop()">Stop</button>
  <div class="timer">{{ seconds() }}</div>
  <app-countdown-timer></app-countdown-timer>
  `,
  styles: [`.timer{line-height: 20px;
    height: 20px;
    border: 1px solid #ccc;
    width: 30px;
    text-align: center;
    margin: 10px 5px;
    background: #000;
    color: #04f3a8;}`]
})

export class CountdownViewChildParentComponent implements AfterViewInit {
  @ViewChild(CountdownTimerComponent) private timerComponent: CountdownTimerComponent;

  seconds() { return 0; }

  ngAfterViewInit() {
    setTimeout(() => {
      this.seconds = () => { return this.timerComponent.seconds; }
    }, 0);
  }
  start() {
    this.timerComponent.start();
  }
  stop() {
    this.timerComponent.stop();
  }
}

