import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppNavComponent } from './app-nav/app-nav.component';

// todo: header, footer, etc.
@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [AppNavComponent],
    exports: [AppNavComponent]
})
export class SharedModule {}
