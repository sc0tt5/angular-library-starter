import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonAModule } from 'my-lib';
import { DemoButtonAComponent } from './demo-button-a.component';

// routes
export const ROUTES: Routes = [{ path: '', component: DemoButtonAComponent }];

@NgModule({
  imports: [ButtonAModule, RouterModule.forChild(ROUTES)],
  declarations: [DemoButtonAComponent]
})
export class DemoButtonAModule {}
