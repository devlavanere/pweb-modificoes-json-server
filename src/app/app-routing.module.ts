import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListagemUsuarioComponent} from "./usuario/listagem-usuario/listagem-usuario.component";
import {AppComponent} from "./app.component";
import {ManterUsuarioComponent} from "./usuario/cadastro-usuario/manter-usuario.component";
import {ListagemUsuariosTabelaComponent} from "./usuario/listagem-usuarios-tabela/listagem-usuarios-tabela.component";

const routes: Routes = [
  {
    path: 'listagem-usuarios',
    component: ListagemUsuarioComponent
  },
  {
    path: 'listagem-usuarios-tabela',
    component: ListagemUsuariosTabelaComponent
  },
  {
    path: 'cadastro-usuario',
    component: ManterUsuarioComponent
  },
  {
    path: 'edicao-usuario/:id',
    component: ManterUsuarioComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
