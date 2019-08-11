import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalDateModule, LocalNumberModule } from 'my-lib';
import { DemoPipesComponent } from './demo-pipes.component';

// routes
export const ROUTES: Routes = [{ path: '', component: DemoPipesComponent }];

@NgModule({
    imports: [CommonModule, LocalDateModule, LocalNumberModule, RouterModule.forChild(ROUTES)],
    declarations: [DemoPipesComponent]
})
export class DemoPipesModule {}
