import { BannerComponent } from "./banner-inline.component";
import { ComponentFixture, TestBed, ComponentFixtureAutoDetect } from "@angular/core/testing";
import { DebugElement } from "@angular/core/src/debug/debug_node";
import { By } from "@angular/platform-browser"

describe('BannerComponent(inline template)', () => {
    let comp: BannerComponent;
    let fixture: ComponentFixture<BannerComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [BannerComponent],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(BannerComponent);

        comp = fixture.componentInstance;

        de = fixture.debugElement.query(By.css('h1'));
        el = de.nativeElement;
    });
    it('should display original title', () => {
        fixture.detectChanges();
        expect(el.textContent).toContain(comp.title);
    });
    it('should display a different title', () => {
        comp.title = 'test haha';
        fixture.detectChanges();
        expect(el.textContent).toContain('haha');
    })
})