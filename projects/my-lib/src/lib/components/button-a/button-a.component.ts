import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'my-button-a',
  templateUrl: './button-a.component.html',
  styleUrls: ['./button-a.component.scss']
})
export class ButtonAComponent {
  @Input() message: string;
  @Input() text: string;
  @Input() disabled: boolean;
  @Output() myEvent: EventEmitter<any> = new EventEmitter();

  constructor() {}

  onClick() {
    this.myEvent.emit(this.message);
  }
}
