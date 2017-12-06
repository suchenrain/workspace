import { Type } from "@angular/core";

type AdData={name:string,bio:string}|{headline:string,body:string};

export class AdItem {
    constructor(public component: Type<any>, public data: AdData) { }
}