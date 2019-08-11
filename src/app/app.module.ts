import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

// routes
export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'button-a' },
  { path: 'button-a', loadChildren: './demo-button-a/demo-button-a.module#DemoButtonAModule' },
  { path: 'button-b', loadChildren: './demo-button-b/demo-button-b.module#DemoButtonBModule' }
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(ROUTES)],
  bootstrap: [AppComponent]
})
export class AppModule {}
