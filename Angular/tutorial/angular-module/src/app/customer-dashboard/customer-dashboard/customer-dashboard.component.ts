import { Component, OnInit } from '@angular/core';
import { UserService } from '@app/core';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.scss'],
  providers: [UserService]
})
export class CustomerDashboardComponent implements OnInit {

  public isAvailable = true;
  public age = 0;
  constructor(private userService: UserService) {
    console.log(userService);
  }

  ngOnInit() {
    this.age = this.userService.age;
  }
  private toggle() {
    this.isAvailable = !this.isAvailable;
    setTimeout(() => {
      this.isAvailable = true;
    }, 5000);
  }
  private add() {
    this.userService.grow();
    this.age = this.userService.age;
  }
  private reduce() {
    this.userService.reduce();
    this.age = this.userService.age;
  }
}
