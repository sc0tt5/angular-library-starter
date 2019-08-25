import { NgModule } from '@angular/core';
import { AccordionModule as ngAccordionModule } from 'ngx-bootstrap';
import { AccordionComponent } from './accordion.component';
// requires BrowserAnimationsModule

@NgModule({
    declarations: [AccordionComponent],
    imports: [ngAccordionModule.forRoot()],
    exports: [AccordionComponent]
})
export class AccordionModule {}
