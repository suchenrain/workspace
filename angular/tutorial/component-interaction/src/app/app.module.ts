import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeroChildComponent } from './hero-child.component';
import { HeroParentComponent } from './hero-parent.component';
import { NameChildComponent } from "./name-child.component";
import { NameParentComponent } from "./name-parent.component";
import { VersionChildComponent } from './version-child.component';
import { VersionParentComponent } from './version-parent.component';
import { VoterParentComponent } from './voter-parent.component';
import { VoterChildComponent } from './voter-child.component';
import { CountdownTimerComponent } from './countdown-timer.component';
import { CountdownParentComponent,CountdownViewChildParentComponent } from './countdown-parent.component';
import { AstronautComponent } from "./astronaut.component";
import { MissionControlComponent } from "./missionControl.component";



@NgModule({
  declarations: [
    AppComponent,
    HeroChildComponent,
    HeroParentComponent,
    NameChildComponent,
    NameParentComponent,
    VersionChildComponent,
    VersionParentComponent,
    VoterParentComponent,
    VoterChildComponent,
    CountdownTimerComponent,
    CountdownParentComponent,
    CountdownViewChildParentComponent,
    AstronautComponent,
    MissionControlComponent
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
