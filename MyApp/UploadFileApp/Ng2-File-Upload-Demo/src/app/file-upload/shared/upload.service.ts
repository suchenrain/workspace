import { Injectable } from '@angular/core';


export class UploadResponse {
  statusCode: number;
  message: string;
  data: any
}

@Injectable()
export class UploadService {
  results: UploadResponse = new UploadResponse();
  constructor() { }

  handleResults(item: any, response: any, status: any, headers: any): UploadResponse {
    switch (status) {
      case 415: console.log("unsupport file type!");
        this.results.statusCode = status;
        this.results.message = 'unsupport file type!';
        this.results.data = null;
        break;
      case 200: console.log("upload successfully!");
        this.results.statusCode = status;
        this.results.message = 'upload successfully!';
        this.results.data = JSON.stringify(JSON.parse(response), null, 2);;
        break;
      default: console.log("an error occurred! Please try again later!");
        this.results.statusCode = status;
        this.results.message = 'an error occurred!';
        this.results.data = null;
        break;
    }
    return this.results;
  }
}
