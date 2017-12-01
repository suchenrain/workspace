import { Component, OnInit, ViewChild,HostBinding } from '@angular/core';
import { FileUploader, FileDropDirective, FileSelectDirective, FileItem } from "ng2-file-upload";

import { UploadResponse, UploadService } from "../../shared/upload.service";
import { slideInDownAnimation } from '../../../shared/animations';

// const URL = '/api/';
const URL = 'http://localhost:8100/api/fileupload';
const allowdTypes: Array<string> = ['image/jpeg', 'image/png', 'image/jpg'];

@Component({
  selector: 'app-picture-upload',
  templateUrl: './picture-upload.component.html',
  styleUrls: ['./picture-upload.component.css'],
  animations:[slideInDownAnimation]
})
export class PictureUploadComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'relative';
  public uploader: FileUploader = new FileUploader({
    url: URL,
    autoUpload: true,
    removeAfterUpload: true,
    allowedMimeType: allowdTypes
  });
  public hasBaseDropZoneOver: boolean = false;
  public results: UploadResponse = new UploadResponse();
  @ViewChild('file') fileInput: any;

  constructor(private uploadService: UploadService) {
  }
  ngOnInit() {
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      // (resolve)Re-select the same file doesn't work
      this.fileInput.nativeElement.value = '';
      this.results = this.uploadService.handleResults(item, response, status, headers);
    };
    this.uploader.onBeforeUploadItem = (item: FileItem) => {
      this.results = new UploadResponse();
    }
  }
  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

}
