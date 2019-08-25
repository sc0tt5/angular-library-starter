import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'demo-demo-accordion',
    templateUrl: './demo-accordion.component.html',
    styleUrls: ['./demo-accordion.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoAccordionComponent implements OnInit {
    @Input() accordionJson: Array<object>;

    constructor() {}

    ngOnInit() {
        this.accordionJson = [
            {
                heading: 'Content 1',
                content: 'Accordion 1',
                isOpen: false
            },
            {
                heading: 'Initially expanded',
                content: 'Accordion 2',
                isOpen: true
            },
            {
                heading: 'Content 3',
                content: 'Accordion 3',
                isOpen: false
            }
        ];
    }
}
