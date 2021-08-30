import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientepjComponent } from './clientepj.component';

describe('ClientepjComponent', () => {
  let component: ClientepjComponent;
  let fixture: ComponentFixture<ClientepjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientepjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientepjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
