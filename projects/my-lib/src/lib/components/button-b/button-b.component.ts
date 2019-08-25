import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'my-button-b',
    templateUrl: './button-b.component.html',
    styleUrls: ['./button-b.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonBComponent {
    @Input() message: string;
    @Input() text: string;
    @Input() disabled: boolean;

    constructor() {}

    logMessage() {
        console.log(this.message);
    }
}
