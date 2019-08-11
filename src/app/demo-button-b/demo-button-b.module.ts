import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonBModule } from 'my-lib';
import { DemoButtonBComponent } from './demo-button-b.component';

// routes
export const ROUTES: Routes = [{ path: '', component: DemoButtonBComponent }];

@NgModule({
  imports: [ButtonBModule, RouterModule.forChild(ROUTES)],
  declarations: [DemoButtonBComponent]
})
export class DemoButtonBModule {}
