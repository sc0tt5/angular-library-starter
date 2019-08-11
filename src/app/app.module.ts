import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

// routes
export const ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'button-a' },
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
    imports: [BrowserModule, RouterModule.forRoot(ROUTES)],
    bootstrap: [AppComponent]
})
export class AppModule {}
