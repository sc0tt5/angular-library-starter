import { NgModule } from '@angular/core';
import { LocalNumberPipe } from './local-number.pipe';

@NgModule({
    declarations: [LocalNumberPipe],
    exports: [LocalNumberPipe]
})
export class LocalNumberModule {}
