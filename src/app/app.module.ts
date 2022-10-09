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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import { CruiseComponent } from './cruise/cruise.component';
import { DeviceConfigurationService } from './device-configuration.service';

const routes: Routes = [
  { path: '', component: BlocklyComponent },
  { path: 'save', component: SaveComponent },
  { path: 'open', component: FileOpenComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'cruise' , component: CruiseComponent}
]

@NgModule({
    declarations: [
        AppComponent,
        BlocklyComponent,
        HeaderComponent,
        SaveComponent,
        FileOpenComponent,
        SignInComponent,
        RegisterComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        NgbModule,
        RouterModule.forRoot(routes),
        FormsModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatDialogModule,
        MatListModule
    ],
    providers: [authInterceptorProviders,DeviceConfigurationService],
    bootstrap: [AppComponent],
    exports: [BlocklyComponent]
})
export class AppModule { }
