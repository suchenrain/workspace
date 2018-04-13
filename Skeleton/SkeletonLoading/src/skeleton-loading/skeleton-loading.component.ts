import {
    Component,
    OnInit,
    Input,
    ChangeDetectionStrategy
} from "@angular/core";
import { Defaults } from "./defaults.enum";

@Component({
    selector: "skeleton-loading",
    templateUrl: "./skeleton-loading.component.html",
    styleUrls: ["./skeleton-loading.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkeletonLoadingComponent implements OnInit {
    @Input() isLoading: boolean = true;

    @Input() public width = Defaults.Width;

    @Input() public height = Defaults.Height;

    @Input() public primaryColor: string = Defaults.PrimaryColor;

    @Input() public secondaryColor: string = Defaults.SecondaryColor;

    @Input() public speed: string = Defaults.Speed;

    @Input() public preserveAspectRatio = Defaults.PreserveAspectRatio;

    public get viewBox(): string {
        return `0 0 ${this.width} ${this.height}`;
    }

    public ngOnInit(): void {}
}
