import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientepfComponent } from './clientepf.component';

describe('ClientepfComponent', () => {
  let component: ClientepfComponent;
  let fixture: ComponentFixture<ClientepfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientepfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientepfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
