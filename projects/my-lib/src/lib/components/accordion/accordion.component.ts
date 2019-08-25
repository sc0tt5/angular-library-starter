import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'my-accordion',
    templateUrl: './accordion.component.html',
    styleUrls: ['./accordion.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionComponent {
    faPlus = faPlus;
    faMinus = faMinus;
    @Input() accordionJson: Array<any>;

    updateOpen(isOpen: boolean, index: number) {
        this.accordionJson[index].isOpen = isOpen;
    }
}
