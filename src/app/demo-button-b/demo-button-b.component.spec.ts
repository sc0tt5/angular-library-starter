import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DemoButtonBComponent } from './demo-button-b.component';

describe('DemoButtonBComponent', () => {
    let component: DemoButtonBComponent;
    let fixture: ComponentFixture<DemoButtonBComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DemoButtonBComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DemoButtonBComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
