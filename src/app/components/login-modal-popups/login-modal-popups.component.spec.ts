import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginModalPopupsComponent } from './login-modal-popups.component';

describe('LoginModalPopupsComponent', () => {
  let component: LoginModalPopupsComponent;
  let fixture: ComponentFixture<LoginModalPopupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginModalPopupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginModalPopupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
