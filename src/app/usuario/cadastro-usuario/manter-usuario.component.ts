import { Component } from '@angular/core';
import { Usuario } from "../../shared/model/usuario";
import { ActivatedRoute, Router } from "@angular/router";
import { UsuarioService } from "../../shared/services/usuario.service";
import { MensagemSweetService } from "../../shared/services/mensagem-sweet.service";

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './manter-usuario.component.html',
  styleUrl: './manter-usuario.component.scss'
})
export class ManterUsuarioComponent {

  usuario = new Usuario('', '', 0);
  modoEdicao = false;

  constructor(
    private roteador: Router, 
    private rotaAtual: ActivatedRoute,
    private usuarioService: UsuarioService, 
    private mensagemService: MensagemSweetService
  ) {
    const idParaEdicao = this.rotaAtual.snapshot.paramMap.get('id');
    if (idParaEdicao) {
      this.modoEdicao = true;
      this.usuarioService.listar().subscribe(usuarios => {
        const usuarioAEditar = usuarios.find(usuario => usuario.id === idParaEdicao);
        if (usuarioAEditar) {
          this.usuario = usuarioAEditar;
        }
      });
    }
  }

  inserir() {
    if (this.modoEdicao) {
      this.usuarioService.editar(this.usuario).subscribe({
        next: () => {
          this.roteador.navigate(['listagem-usuarios']);
          this.mensagemService.sucesso('Usuário atualizado com sucesso.');
        },
        error: (e) => {
          if (e.message !== 'Erro de validação') {
            this.mensagemService.erro(e.message);
          }
        }
      });
    } else {
      this.usuarioService.inserir(this.usuario).subscribe({
        next: () => {
          this.roteador.navigate(['listagem-usuarios']);
          this.mensagemService.sucesso('Usuário cadastrado com sucesso.');
        },
        error: (e) => {
          if (e.message !== 'Erro de validação') {
            this.mensagemService.erro(e.message);
          }
        }
      });
    }
  }
}
