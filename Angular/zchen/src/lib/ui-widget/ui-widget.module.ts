import { NgModule } from "@angular/core";
import { SharedModule } from "../common";
import { SmartImageComponent } from "./smart-image/smart-image.component";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [CommonModule, SharedModule.forRoot()],
  declarations: [SmartImageComponent],
  exports: [SmartImageComponent]
})
export class UIWidgetModule {}
