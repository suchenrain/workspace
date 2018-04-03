import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SmartImageComponent } from "./smart-image/smart-image.component";

@NgModule({
  imports: [CommonModule],
  declarations: [SmartImageComponent],
  exports: [SmartImageComponent]
})
export class UIWidgetModule {}
