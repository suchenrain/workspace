import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Http, HttpModule } from "@angular/http";

import { AnalyticsDemoComponent } from "./analytics-demo.component";
import { AnalyticsService } from "../services/analytics.service";
import { AnalyticsImplementation, Metric } from "./analytics-demo.interface";

@NgModule({
  imports: [CommonModule, HttpModule],
  declarations: [AnalyticsDemoComponent],
  providers: [
    //add our API_URL provider
    {
      provide: "API_URL",
      useValue: "http://devserver.com"
    },
    {
      provide: AnalyticsService,
      //add our `deps` to specify the factory depencies
      deps: [Http, "API_URL"],
      //**parameters order match deps order**
      useFactory: ( apiUrl: string,http: Http) => {
        //create an implementaion that will log the event
        const loggingImplementation: AnalyticsImplementation = {
          recordEvent: (metric: Metric): void => {
            console.log("The metric is:", metric);
            console.log("Sending to:", http);
            //... you'd send the metric using http here
          }
        };
        //create our new `AnalyticsService` with the implementation
        return new AnalyticsService(loggingImplementation);
      }
    }
  ],
  exports: [AnalyticsDemoComponent]
})
export class AnalyticsDemoModule {}
