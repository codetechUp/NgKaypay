import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModiUserComponent } from './modi-user.component';

describe('ModiUserComponent', () => {
  let component: ModiUserComponent;
  let fixture: ComponentFixture<ModiUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModiUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModiUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
