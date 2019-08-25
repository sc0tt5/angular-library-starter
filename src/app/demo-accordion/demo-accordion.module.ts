import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordionModule } from 'my-lib';
import { DemoAccordionComponent } from './demo-accordion.component';

// routes
export const ROUTES: Routes = [{ path: '', component: DemoAccordionComponent }];

@NgModule({
    declarations: [DemoAccordionComponent],
    imports: [AccordionModule, RouterModule.forChild(ROUTES)]
})
export class DemoAccordionModule {}
