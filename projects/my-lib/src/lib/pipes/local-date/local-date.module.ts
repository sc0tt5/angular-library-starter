import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LocalDatePipe } from './local-date.pipe';

@NgModule({
  declarations: [LocalDatePipe],
  imports: [CommonModule]
})
export class LocalDateModule {}
