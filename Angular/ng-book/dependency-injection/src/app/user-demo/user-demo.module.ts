import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserService } from "../services/user.service";
import { UserDemoComponent } from "./user-demo.component";

@NgModule({
  imports: [CommonModule],
  declarations: [UserDemoComponent],
  providers: [UserService],
  exports: [UserDemoComponent]
})
export class UserDemoModule {}
