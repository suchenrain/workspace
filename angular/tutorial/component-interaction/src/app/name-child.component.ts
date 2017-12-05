import { Input, Component } from "@angular/core";

@Component({
    selector: "app-name-child",
    template: `<h3>{{name}}</h3>`
})
export class NameChildComponent {
    private _name: string;

    @Input()
    set name(name: string) {
        this._name = (name && name.trim()) || '<no set name>'
    }
    get name() { return this._name; }
}