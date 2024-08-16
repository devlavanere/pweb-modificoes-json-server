import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {ListagemUsuarioComponent} from "./usuario/listagem-usuario/listagem-usuario.component";
import {ManterUsuarioComponent} from "./usuario/cadastro-usuario/manter-usuario.component";
import {MatMenuModule} from "@angular/material/menu";
import {UsuarioModule} from "./usuario/usuario.module";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        BrowserAnimationsModule,
        MatMenuModule,
        MatIconModule,
        UsuarioModule
    ],
    providers: [
        provideAnimationsAsync()
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
