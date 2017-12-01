import { Component, OnInit, ViewChild ,HostBinding} from '@angular/core';
import { FileUploader, FileDropDirective, FileSelectDirective, FileItem } from "ng2-file-upload";

import { slideInDownAnimation } from "../../../shared/animations";
import { UploadResponse, UploadService } from "../../shared/upload.service";

// const URL = '/api/';
const URL = 'http://localhost:8100/api/fileupload';
const allowdTypes: Array<string> = ['application/octet-stream'];
@Component({
  selector: 'app-moniter-upload',
  templateUrl: './moniter-upload.component.html',
  styleUrls: ['./moniter-upload.component.css'],
  animations:[slideInDownAnimation]
})
export class MoniterUploadComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'relative';
  public uploader: FileUploader = new FileUploader({
    url: URL,
    autoUpload: true,
    removeAfterUpload: true,
    // allowedFileType: allowdTypes
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
