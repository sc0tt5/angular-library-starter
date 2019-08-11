import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonAComponent } from './button-a.component';

@NgModule({
  declarations: [ButtonAComponent],
  imports: [CommonModule],
  exports: [ButtonAComponent]
})
export class ButtonAModule {}
