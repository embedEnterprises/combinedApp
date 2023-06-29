import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhaserComponent } from './phaser/phaser.component';

const routes: Routes = [
  {path:'' , component:PhaserComponent},

]

@NgModule({
    declarations: [
        AppComponent,
         PhaserComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(routes),
    ],
    bootstrap: [AppComponent],
    exports: [PhaserComponent]
})
export class AppModule { }
