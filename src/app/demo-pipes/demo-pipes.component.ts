import { Component } from '@angular/core';
import { SessionService } from 'my-lib';

@Component({
    selector: 'demo-pipes',
    styleUrls: ['./demo-pipes.component.scss'],
    templateUrl: './demo-pipes.component.html'
})
export class DemoPipesComponent {
    today = new Date();
    val = 123.45;

    constructor(private sessionService: SessionService) {}

    norway() {
        this.sessionService.registerCulture('nb-NO');
        this.refreshValues();
    }

    sweden() {
        this.sessionService.registerCulture('sv-SE');
        this.refreshValues();
    }

    private refreshValues() {
        this.today = new Date();
        this.val++;
    }
}
