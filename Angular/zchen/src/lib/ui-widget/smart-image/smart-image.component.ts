import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  Renderer2
} from "@angular/core";
import { InViewportDirective } from "../../common";

@Component({
  selector: "zc-smart-image",
  templateUrl: "./smart-image.component.html",
  styleUrls: ["./smart-image.component.css"]
})
export class SmartImageComponent implements OnInit {
  private loaded: boolean = false;
  @Input() tinySrc: string;
  @Input() src: string;
  @ViewChild(InViewportDirective) viewportRef: InViewportDirective;
  @ViewChild("container") placeholder: ElementRef;
  @ViewChild("tiny") tiny: ElementRef;

  constructor(private renderer: Renderer2) {}

  onInViewportChange(state: boolean) {
    console.log("i am in viewport:", state);
    this.renderRealPic();
  }

  ngOnInit() {
    console.log(this.src);
  }

  ngAfterViewInit() {
    this.renderer.listen(this.tiny.nativeElement, "load", () => {
      this.renderer.addClass(this.tiny.nativeElement, "loaded");
      this.renderRealPic();
    });

    
  }

  renderRealPic() {
    if (this.viewportRef.isInViewport && !this.loaded) {
      const img = this.renderer.createElement("img");
      this.renderer.appendChild(this.placeholder.nativeElement, img);
      this.renderer.setAttribute(img, "src", this.src);

      this.loaded = true;
      // console.log(img);
      this.renderer.listen(img, "load", () => {
        this.renderer.addClass(img, "loaded");
      });
    }
  }
}
