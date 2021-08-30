import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentoDigitalComponent } from './documento-digital.component';

describe('DocumentoDigitalComponent', () => {
  let component: DocumentoDigitalComponent;
  let fixture: ComponentFixture<DocumentoDigitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentoDigitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentoDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
