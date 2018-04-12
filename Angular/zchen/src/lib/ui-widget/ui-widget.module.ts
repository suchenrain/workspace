import { NgModule } from "@angular/core";
import { SharedModule } from "../common";
import { SmartImageComponent } from "./smart-image/smart-image.component";

@NgModule({
  imports: [SharedModule.forRoot()],
  declarations: [SmartImageComponent],
  exports: [SmartImageComponent]
})
export class UIWidgetModule {}
