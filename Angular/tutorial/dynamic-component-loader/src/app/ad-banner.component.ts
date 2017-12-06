import { Component, Input, AfterViewInit, OnDestroy, ViewChild, ComponentFactoryResolver } from "@angular/core";
import { AdItem } from "./ad-item";
import { AdDirective } from "./ad.directive";
import { AdComponent } from "./ad.component";


@Component({
    selector: 'app-ad-banner',
    template: `
            <div class="ad-banner">
                <h3>advertisements</h3>
                <ng-template ad-host></ng-template>
            </div>
    `
})
export class AdBannerComponent implements AfterViewInit, OnDestroy {
    intervalId: any;
    @Input() ads: AdItem[];
    currentAdIndex: number = -1;
    @ViewChild(AdDirective) adHost: AdDirective;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {

    }

    ngAfterViewInit() {
        this.loadComponent();
        this.getAds();
    }
    ngOnDestroy() {
        clearInterval(this.intervalId);
    }

    loadComponent() {
        this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
        let adItem = this.ads[this.currentAdIndex];
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);
        let viewContainerRef = this.adHost.viewContainerRef;
        viewContainerRef.clear();

        let componentRef = viewContainerRef.createComponent(componentFactory);
        //(componentRef.instance as AdComponent).data = adItem.data;
        
        (<AdComponent>componentRef.instance).data=adItem.data;
    }

    getAds() {
        this.intervalId = setInterval(() => {
            this.loadComponent();
        }, 3000)
    }

}