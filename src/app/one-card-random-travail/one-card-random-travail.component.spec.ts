import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneCardRandomTravailComponent } from './one-card-random-travail.component';

describe('OneCardRandomTravailComponent', () => {
  let component: OneCardRandomTravailComponent;
  let fixture: ComponentFixture<OneCardRandomTravailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneCardRandomTravailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneCardRandomTravailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
