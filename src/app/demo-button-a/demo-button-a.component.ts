import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonService } from '@my-lib/components';

@Component({
    selector: 'demo-button-a',
    templateUrl: './demo-button-a.component.html',
    styleUrls: ['./demo-button-a.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoButtonAComponent implements OnInit {
    text = 'testing A';
    message = 'click button A';

    constructor(private commonService: CommonService) {}

    ngOnInit() {
        console.log(this.commonService.getTestOne());
    }
}
