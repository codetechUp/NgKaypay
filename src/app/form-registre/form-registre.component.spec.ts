import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegistreComponent } from './form-registre.component';

describe('FormRegistreComponent', () => {
  let component: FormRegistreComponent;
  let fixture: ComponentFixture<FormRegistreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRegistreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRegistreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
