import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent {
    title = "app";
    isLoading = true;
    testCode: string = "ng g c /models/todo";
    constructor(public http: HttpClient) {}
    public ngOnInit(): void {
      this.http.get('http://localhost:3000/posts').subscribe((data)=>{
        console.log(data);
        this.testCode=data[0].title;
        this.isLoading=false;
      })
    }
}
