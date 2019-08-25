import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'demo-demo-accordion',
    templateUrl: './demo-accordion.component.html',
    styleUrls: ['./demo-accordion.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoAccordionComponent {}
