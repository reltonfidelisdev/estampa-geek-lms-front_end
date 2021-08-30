import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosBancariosPfPjComponent } from './dados-bancarios-pf-pj.component';

describe('DadosBancariosPfPjComponent', () => {
  let component: DadosBancariosPfPjComponent;
  let fixture: ComponentFixture<DadosBancariosPfPjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosBancariosPfPjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosBancariosPfPjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
