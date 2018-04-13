import { Injectable } from "@angular/core";
import { Subject, BehaviorSubject } from "rxjs";
import { User } from "./user.model";
/**
 * manage current user
 *
 * @export
 * @class UsersService
 */
@Injectable()
export class UsersService {
  currentUser: Subject<User> = new BehaviorSubject<User>(null);

  public setCurrentUser(newUser: User): void {
    this.currentUser.next(newUser);
  }
}

export const userServiceInjectables: Array<any> = [UsersService];
