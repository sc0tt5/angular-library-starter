import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'my-accordion',
    templateUrl: './accordion.component.html',
    styleUrls: [
        './accordion.component.scss',
        '../../../../../../node_modules/ngx-bootstrap/accordion/accordion.css'
    ],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionComponent {}
