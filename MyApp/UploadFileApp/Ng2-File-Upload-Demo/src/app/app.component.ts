import { Component } from '@angular/core';
import { FileUploader, FileDropDirective, FileSelectDirective } from "ng2-file-upload";

type UploadResult ={
  status: number;
  message: string;
  data: string;
}

// const URL = '/api/';
const URL = 'http://localhost:8100/api/fileupload';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ng2-File-Upload-Demo';

  public uploader: FileUploader = new FileUploader({ url: URL, autoUpload: true, removeAfterUpload: true });
  public hasBaseDropZoneOver: boolean = false;
  public hasAnotherDropZoneOver: boolean = false;
  public results: UploadResult ;

  constructor() {
    this.uploader.onCompleteItem = this.handleResults;
  }
  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }

  private handleResults(item: any, response: any, status: any, headers: any): void {
    switch (status) {
      case 415: console.log("unsupport file type!");
        this.results.status = status;
        this.results.message = 'unsupport file type!';
        this.results.data = null;
        break;
      case 200: console.log("upload successfully!");
        this.results.status = status;
        this.results.message = 'upload successfully!';
        this.results.data = response;
        break;
      default: console.log("an error occurred! Please try again later!");
        this.results.status = status;
        this.results.message = 'an error occurred!';
        this.results.data = null;
        break;
    }
  }


}


