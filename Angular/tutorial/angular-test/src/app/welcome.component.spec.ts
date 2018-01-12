import { WelcomeComponent } from "./welcome.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { DebugElement } from "@angular/core/src/debug/debug_node";
import { UserService } from "./model/user.service";
import { By } from "@angular/platform-browser";



describe('WelcomeCoponent', () => {
    let comp: WelcomeComponent;
    let fixture: ComponentFixture<WelcomeComponent>;
    let de: DebugElement;
    let el: HTMLElement;
    let userService: UserService;

    beforeEach(() => {
        let userServiceStub = {
            isLoggedIn: true,
            user: { name: 'haha' }
        }

        TestBed.configureTestingModule({
            declarations: [
                WelcomeComponent]
            ,
            providers: [
                { provide: UserService, useValue: userServiceStub }
            ]
        });

        fixture = TestBed.createComponent(WelcomeComponent);
        comp = fixture.componentInstance;

        // userService=fixture.debugElement.injector.get(UserService);
        userService = TestBed.get(UserService);

        de = fixture.debugElement.query(By.css('.welcome'));
        el = de.nativeElement;

    })
})