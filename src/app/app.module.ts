import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

// routes
export const ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'button-a' },
    {
        path: 'accordion',
        loadChildren: () =>
            import('./demo-accordion/demo-accordion.module').then(m => m.DemoAccordionModule)
    },
    {
        path: 'button-a',
        loadChildren: () =>
            import('./demo-button-a/demo-button-a.module').then(m => m.DemoButtonAModule)
    },
    {
        path: 'button-b',
        loadChildren: () =>
            import('./demo-button-b/demo-button-b.module').then(m => m.DemoButtonBModule)
    },
    {
        path: 'pipes',
        loadChildren: () => import('./demo-pipes/demo-pipes.module').then(m => m.DemoPipesModule)
    }
];

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, BrowserAnimationsModule, RouterModule.forRoot(ROUTES), SharedModule],
    bootstrap: [AppComponent]
})
export class AppModule {}
