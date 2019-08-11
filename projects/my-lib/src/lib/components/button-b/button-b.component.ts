import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'my-button-b',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './button-b.component.html',
  styleUrls: ['./button-b.component.scss']
})
export class ButtonBComponent {
  @Input() message: string;
  @Input() text: string;
  @Input() disabled: boolean;

  constructor() {}

  logMessage() {
    console.log(this.message);
  }
}
