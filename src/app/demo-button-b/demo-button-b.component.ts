import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonService } from 'my-lib';

@Component({
    selector: 'demo-button-b',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './demo-button-b.component.html',
    styleUrls: ['./demo-button-b.component.scss']
})
export class DemoButtonBComponent implements OnInit {
    text = 'testing B';
    message = 'click button B';

    constructor(private commonService: CommonService) {}

    ngOnInit() {
        console.log(this.commonService.getTestTwo());
    }
}
