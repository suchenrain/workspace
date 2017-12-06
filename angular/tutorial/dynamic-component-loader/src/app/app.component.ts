import { Component,OnInit } from '@angular/core';
import { AdItem } from './ad-item';
import { AdService } from './ad.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ads: AdItem[];
  title = 'app';

  constructor(private adservice: AdService) {

  }
  ngOnInit() {
    this.ads = this.adservice.getAds();
  }
}
