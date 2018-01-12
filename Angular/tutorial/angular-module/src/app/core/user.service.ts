import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  public age: number = 0;
  constructor() { }
  public grow() {
    this.age++;
  }
  public reduce() {
    this.age--;
  }
}
