import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ManterUsuarioComponent} from "./cadastro-usuario/manter-usuario.component";
import {ListagemUsuarioComponent} from "./listagem-usuario/listagem-usuario.component";
import {AppRoutingModule} from "../app-routing.module";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "../material/material.module";
import { ListagemUsuariosTabelaComponent } from './listagem-usuarios-tabela/listagem-usuarios-tabela.component';
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [ManterUsuarioComponent, ListagemUsuarioComponent, ListagemUsuariosTabelaComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    SweetAlert2Module,
    HttpClientModule
  ],
  exports: [ManterUsuarioComponent, ListagemUsuarioComponent]
})
export class UsuarioModule { }
