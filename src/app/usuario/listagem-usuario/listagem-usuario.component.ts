import { Component } from '@angular/core';
import { Usuario } from "../../shared/model/usuario";
import { Router } from "@angular/router";
import { UsuarioService } from "../../shared/services/usuario.service";

@Component({
  selector: 'app-listagem-usuario',
  templateUrl: './listagem-usuario.component.html',
  styleUrl: './listagem-usuario.component.scss'
})
export class ListagemUsuarioComponent {

  usuarios: Usuario[] = [];

  constructor(private roteador: Router, private usuarioService: UsuarioService) {
    this.carregarUsuarios();
  }

  private carregarUsuarios() {
    this.usuarioService.listar().subscribe({
      next: usuariosRetornados => this.usuarios = usuariosRetornados,
      error: () => console.error('Erro ao carregar usuários.')
    });
  }

  remover(usuarioARemover: Usuario) {
    this.usuarioService.remover(usuarioARemover.id).subscribe({
      next: () => {
        this.usuarios = this.usuarios.filter(usuario => usuario.id !== usuarioARemover.id);
      },
      error: (e) => console.error('Erro ao remover usuário:', e)
    });
  }

  editar(usuarioAEditar: Usuario) {
    this.roteador.navigate(['edicao-usuario', usuarioAEditar.id]);
  }
}
