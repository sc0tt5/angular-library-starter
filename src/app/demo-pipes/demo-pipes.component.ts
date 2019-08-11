import { Component } from '@angular/core';
import { SessionService } from 'my-lib';

@Component({
    selector: 'demo-pipes',
    styleUrls: ['./pipes-demo.component.scss'],
    templateUrl: './pipes-demo.component.html'
})
export class DemoPipesComponent {
    today = new Date();
    val = 123.45;

    constructor(private session: SessionService) {}

    norway() {
        this.session.registerCulture('nb-NO');
        this.refreshValues();
    }

    sweden() {
        this.session.registerCulture('sv-SE');
        this.refreshValues();
    }

    private refreshValues() {
        this.today = new Date();
        this.val++;
    }
}
