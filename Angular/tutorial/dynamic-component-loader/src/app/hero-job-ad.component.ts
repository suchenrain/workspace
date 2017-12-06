import { Component, Input } from "@angular/core";
import { AdComponent } from "./ad.component";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";


@Component({
    template: `
    <div class='ad-job'>
    <h4>{{data.headline}}</h4>
    {{data.body}}
    </div>
    `,
    styles: [`.ad-job{
        border:1px solid #ccc;
        width:100px;
        
    }`]
})
export class HeroJobAdComponent implements AdComponent, OnInit {
    @Input() data: any;
    ngOnInit() {
        console.log(this.data);
    }
}