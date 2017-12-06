import { Injectable } from "@angular/core";
import { AdItem } from "./ad-item";
import { HeroJobAdComponent } from "./hero-job-ad.component";
import { HeroProfileComponent } from "./hero-profile.component";

@Injectable()
export class AdService {
    getAds() {
        return [
            new AdItem(HeroProfileComponent, { name: 'Haru', bio: 'what the hell!' }),
            new AdItem(HeroProfileComponent, { name: 'i have no bio', bio: 'haha' }),
            new AdItem(HeroJobAdComponent, { headline: 'what are you doing?', body: 'Okay,i got it' }),
            new AdItem(HeroJobAdComponent, { headline: 'i have no body', body: 'ok' })
        ]
    }
}