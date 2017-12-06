import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AdDirective } from './ad.directive';
import { AdBannerComponent } from './ad-banner.component';
import { AdService } from './ad.service';
import { HeroJobAdComponent } from './hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile.component';



@NgModule({
  declarations: [
    AppComponent,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    AdDirective,

  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [HeroJobAdComponent, HeroProfileComponent],
  providers: [AdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
