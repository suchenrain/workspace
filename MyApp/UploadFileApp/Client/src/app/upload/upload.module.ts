import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload.component';
import { FileUploadComponent } from "../file-upload/file-upload.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UploadComponent,FileUploadComponent],
  exports:[UploadComponent]
})
export class UploadModule { }
