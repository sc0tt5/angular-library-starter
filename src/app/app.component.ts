import { Component, OnInit } from '@angular/core';
import { CommonService } from 'my-lib';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'lib-demo';

  constructor(private commonService: CommonService) {}

  ngOnInit() {
    console.log(this.commonService.getTestOne());
  }
}
