import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'my-button-a',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './button-a.component.html',
    styleUrls: ['./button-a.component.scss']
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
