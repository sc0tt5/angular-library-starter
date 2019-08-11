import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DemoButtonAComponent } from './demo-button-a.component';

describe('DemoButtonAComponent', () => {
    let component: DemoButtonAComponent;
    let fixture: ComponentFixture<DemoButtonAComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DemoButtonAComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DemoButtonAComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
