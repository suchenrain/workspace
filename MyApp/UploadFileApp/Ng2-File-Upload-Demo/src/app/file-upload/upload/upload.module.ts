import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload.component';
import { MoniterUploadComponent } from './moniter-upload/moniter-upload.component';
import { PictureUploadComponent } from './picture-upload/picture-upload.component';

import { UploadService } from "../shared/upload.service";
import { UploadRoutingModule } from "./upload-routing.module";
import { FileUploadModule } from "ng2-file-upload";


@NgModule({
  imports: [
    CommonModule,
    UploadRoutingModule,
    FileUploadModule
  ],
  declarations: [UploadComponent, MoniterUploadComponent, PictureUploadComponent],
  providers: [UploadService]
})
export class UploadModule { }
