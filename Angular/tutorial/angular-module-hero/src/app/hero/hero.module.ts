import { NgModule }            from '@angular/core';

import { SharedModule }        from '../shared/shared.module';

import { HeroComponent }       from './hero.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroListComponent }   from './hero-list.component';
import { HeroRoutingModule }   from './hero-routing.module';
import { UserService } from '../core/user.service';

@NgModule({
  imports: [ SharedModule, HeroRoutingModule ],
  declarations: [
    HeroComponent, HeroDetailComponent, HeroListComponent,
  ],
  providers:[UserService]
})
export class HeroModule { }
