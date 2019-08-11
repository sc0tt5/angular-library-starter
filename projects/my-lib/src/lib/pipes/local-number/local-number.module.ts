import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LocalNumberPipe } from './local-number.pipe';

@NgModule({
  declarations: [LocalNumberPipe],
  imports: [CommonModule]
})
export class LocalNumberModule {}
