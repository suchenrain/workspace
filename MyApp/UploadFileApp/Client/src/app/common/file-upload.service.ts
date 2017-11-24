import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class FileUploadService {

  private baseURL: string = 'http://localhost:xxxx/api/fileupload/';

  constructor(private http: Http) { }

  upload(files, parameters) {
    let headers = new Headers();
    let options = new RequestOptions({ headers: headers });
    options.params = parameters;
    return this.http.post(this.baseURL + "upload", files, options)
      .map(response => response.json())
      .catch(error => Observable.throw(error));

  }
  getFiles() {
    return this.http.get(this.baseURL + "getFiles")
      .map(response => response.json())
      .catch(error => Observable.throw(error));
  }

}
