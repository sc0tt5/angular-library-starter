import { NgModule } from '@angular/core';
import { ButtonAComponent } from './button-a.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    imports: [FontAwesomeModule],
    declarations: [ButtonAComponent],
    exports: [ButtonAComponent]
})
export class ButtonAModule {}
