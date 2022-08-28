import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlocklyComponent } from './blockly/blockly.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RouterModule, Routes } from '@angular/router';
import { SaveComponent } from './save/save.component';
import { FileOpenComponent } from './file-open/file-open.component'
import { SignInComponent } from './sign-in/sign-in.component'
import {FormsModule} from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component'

const routes: Routes = [
  { path: '', component: BlocklyComponent },
  { path: 'save', component: SaveComponent },
  { path: 'open', component: FileOpenComponent },
  { path: 'sign-in', component: SignInComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    BlocklyComponent,
    HeaderComponent,
    SaveComponent,
    FileOpenComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [BlocklyComponent]
})
export class AppModule { }
