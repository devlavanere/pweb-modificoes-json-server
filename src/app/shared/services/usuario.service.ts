import { Injectable } from '@angular/core';
import { Usuario } from "../model/usuario";
import { UsuarioRestService } from "./usuario-rest.service";
import { Observable, throwError, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { MensagemSweetService } from './mensagem-sweet.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private usuarioRestService: UsuarioRestService,
    private mensagemService: MensagemSweetService
  ) { }

  listar(): Observable<Usuario[]> {
    return this.usuarioRestService.listar();
  }

  inserir(usuario: Usuario): Observable<Usuario> {
    return this.validarId(usuario).pipe(
      switchMap(isValid => {
        if (isValid) {
          return this.usuarioRestService.iserir(usuario).pipe(
            catchError((error) => {
              this.mensagemService.erro('Erro ao cadastrar usuário.');
              return throwError(() => error);
            })
          );
        } else {
          return throwError(() => new Error('ID inválido ou já existente.'));
        }
      })
    );
  }

  editar(usuario: Usuario): Observable<Usuario> {
    return this.validarId(usuario, true).pipe(
      switchMap(isValid => {
        if (isValid) {
          return this.usuarioRestService.atualizar(usuario).pipe(
            catchError((error) => {
              this.mensagemService.erro('Erro ao atualizar usuário.');
              return throwError(() => error);
            })
          );
        } else {
          return throwError(() => new Error('ID inválido ou já existente.'));
        }
      })
    );
  }

  remover(id: string): Observable<void> {
    return this.usuarioRestService.remover(id).pipe(
      catchError((error) => {
        this.mensagemService.erro('Erro ao remover usuário.');
        return throwError(() => error);
      })
    );
  }

  private validarId(usuario: Usuario, isEdicao: boolean = false): Observable<boolean> {
    const idNumber = parseInt(usuario.id, 10);

    if (idNumber <= 0) {
      this.mensagemService.info('O ID deve ser maior que zero.');
      return of(false);
    }

    return this.usuarioRestService.listar().pipe(
      map(usuarios => {
        const usuarioExistente = usuarios.find(u => u.id === usuario.id);
        if (usuarioExistente && !isEdicao) {
          this.mensagemService.info('Já existe um usuário com esse ID!');
          return false;
        }
        return true;
      }),
      catchError((error) => {
        this.mensagemService.erro('Erro ao validar ID.');
        return of(false);
      })
    );
  }
}
