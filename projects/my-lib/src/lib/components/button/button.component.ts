import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'my-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() message: string;
  @Input() text: string;
  @Input() disabled: boolean;
  @Output() myEvent: EventEmitter<any> = new EventEmitter();

  constructor() {}

  onClick() {
    this.myEvent.emit(this.message);
  }
}
