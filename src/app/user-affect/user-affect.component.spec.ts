import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAffectComponent } from './user-affect.component';

describe('UserAffectComponent', () => {
  let component: UserAffectComponent;
  let fixture: ComponentFixture<UserAffectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAffectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
