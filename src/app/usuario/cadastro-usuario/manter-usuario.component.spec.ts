import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManterUsuarioComponent } from './manter-usuario.component';

describe('CadastroUsuarioComponent', () => {
  let component: ManterUsuarioComponent;
  let fixture: ComponentFixture<ManterUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManterUsuarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManterUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
