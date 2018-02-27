import { Component, OnInit, Inject } from "@angular/core";
import { AnalyticsService } from "../services/analytics.service";

@Component({
  selector: "inventory-app-analytics-demo",
  templateUrl: "./analytics-demo.component.html",
  styleUrls: ["./analytics-demo.component.css"]
})
export class AnalyticsDemoComponent implements OnInit {
  constructor(
    private analytics: AnalyticsService,
    @Inject("API_URL") apiUrl: string
  ) {
    this.analytics.record({
      eventName: "componentCreated",
      scope: "AnalyticsDemoComponent"
    });

    console.log(
      "AnalyticsDemoComponent constructor inject string API_URL:",
      apiUrl
    );
  }

  ngOnInit() {
    this.analytics.record({
      eventName: "componentOnInit",
      scope: "AnalyticsDemoComponent"
    });
  }
  buyButtonPressed(product: string) {
    this.analytics.record({
      eventName: "buyButtonPressed",
      scope: product
    });
  }
}
