import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "inventory-app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  id: string;
  other: any;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params.id;
      console.log("params:", params);
    });
    this.route.fragment.subscribe(fragment => {
      console.log("fragment:", fragment);
    });
    this.route.queryParams.subscribe(qp => {
      console.log("queryParams:", qp);
    });
    this.route.queryParamMap.subscribe(qpm => {
      console.log("queryParamMap", qpm);
    });
  }

  ngOnInit() {}
}
