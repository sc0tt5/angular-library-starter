import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AccordionModule as ngAccordionModule } from 'ngx-bootstrap';
import { AccordionComponent } from './accordion.component';
// requires BrowserAnimationsModule

@NgModule({
    declarations: [AccordionComponent],
    imports: [CommonModule, FontAwesomeModule, ngAccordionModule.forRoot()],
    exports: [AccordionComponent]
})
export class AccordionModule {}
