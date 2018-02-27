import { Component, OnInit, ReflectiveInjector } from "@angular/core";
import { UserService } from "../services/user.service";

@Component({
  selector: "inventory-app-user-demo",
  templateUrl: "./user-demo.component.html",
  styleUrls: ["./user-demo.component.css"]
})
export class UserDemoComponent implements OnInit {
  userName: string;
  //userService: UserService; //removed `userService` because of constructor shorthand below

  //Angular will inject the singleton instance of `UserService` here
  //We set it as a property with `private`

  constructor(private userService: UserService) {
    /*  // create an _injector_ and ask for it to resolve and create a UserService
    const injector: any = ReflectiveInjector.resolveAndCreate([UserService]);

    //use the injector to **get the instance** of the UserService
    this.userService = injector.get(UserService); */
  }

  ngOnInit() {}

  /* public methodes */
  signIn() {
    // when we sign in, set the user
    this.userService.setUser({ name: "Pawn" });

    //now **read** the user name from the service
    this.userName = this.userService.getUser().name;
    console.log("user name is:", this.userName);
  }
}
