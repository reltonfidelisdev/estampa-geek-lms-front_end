import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteNgxMaskComponent } from './teste-ngx-mask.component';

describe('TesteNgxMaskComponent', () => {
  let component: TesteNgxMaskComponent;
  let fixture: ComponentFixture<TesteNgxMaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesteNgxMaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteNgxMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
