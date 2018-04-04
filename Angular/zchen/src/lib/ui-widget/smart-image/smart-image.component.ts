import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  Renderer2
} from "@angular/core";

@Component({
  selector: "zc-smart-image",
  templateUrl: "./smart-image.component.html",
  styleUrls: ["./smart-image.component.css"]
})
export class SmartImageComponent implements OnInit {
  @Input() src: string;
  @Input() tinySrc: string;
  @ViewChild("container") placeholder: ElementRef;
  @ViewChild("tiny") tiny: ElementRef;
  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    console.log(this.src);
  }

  ngAfterViewInit() {
    this.renderer.listen(this.tiny.nativeElement, "load", () => {
      this.renderer.addClass(this.tiny.nativeElement, "loaded");
    });

    const img = this.renderer.createElement("img");
    this.renderer.appendChild(this.placeholder.nativeElement, img);
    this.renderer.setAttribute(img, "src", this.src);

    // console.log(img);
    this.renderer.listen(img, "load", () => {
      this.renderer.addClass(img, "loaded");
    });
  }
}
