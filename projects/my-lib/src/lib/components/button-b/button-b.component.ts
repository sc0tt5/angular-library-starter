import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'my-button-b',
  templateUrl: './button-b.component.html',
  styleUrls: ['./button-b.component.scss']
})
export class ButtonBComponent {
  @Input() message: string;
  @Input() text: string;
  @Input() disabled: boolean;
  @Output() myEvent: EventEmitter<any> = new EventEmitter();

  constructor() {}

  onClick() {
    this.myEvent.emit(this.message);
  }
}
