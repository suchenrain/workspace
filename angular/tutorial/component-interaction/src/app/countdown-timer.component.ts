import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  template: `
    <p>
      {{message}}
    </p>
  `,
  styles: []
})
export class CountdownTimerComponent implements OnInit, OnDestroy {

  seconds = 11;
  intervalId: any = 0;
  message = '';

  constructor() { }

  ngOnInit() {
    this.start();
  }
  ngOnDestroy() {
    this.clearTimer();
  }

  clearTimer() {
    clearInterval(this.intervalId);
  }
  start() {
    this.countDown();
  }
  stop() {
    this.clearTimer();
    this.message = `Holding at T-${this.seconds} seconds`;
  }

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        this.message = "Blast ooff!!";
      } else {
        if (this.seconds < 0) {
          this.seconds = 10;
        }
        this.message = `T-${this.seconds} seconds and counting...`;
      }
    }, 1000)
  }

}
