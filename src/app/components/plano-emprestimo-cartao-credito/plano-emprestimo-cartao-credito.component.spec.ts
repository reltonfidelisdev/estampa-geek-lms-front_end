import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoEmprestimoCartaoCreditoComponent } from './plano-emprestimo-cartao-credito.component';

describe('PlanoEmprestimoCartaoCreditoComponent', () => {
  let component: PlanoEmprestimoCartaoCreditoComponent;
  let fixture: ComponentFixture<PlanoEmprestimoCartaoCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanoEmprestimoCartaoCreditoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanoEmprestimoCartaoCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
