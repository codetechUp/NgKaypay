import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectTimeComponent } from './affect-time.component';

describe('AffectTimeComponent', () => {
  let component: AffectTimeComponent;
  let fixture: ComponentFixture<AffectTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffectTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffectTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
