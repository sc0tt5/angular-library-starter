import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'my-button-a',
    templateUrl: './button-a.component.html',
    styleUrls: ['./button-a.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonAComponent {
    faCoffee = faCoffee;

    @Input() message: string;
    @Input() text: string;
    @Input() disabled: boolean;

    constructor() {}

    logMessage() {
        console.log(this.message);
    }
}
