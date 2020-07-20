import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoCardRandomTravailComponent } from './two-card-random-travail.component';

describe('TwoCardRandomTravailComponent', () => {
  let component: TwoCardRandomTravailComponent;
  let fixture: ComponentFixture<TwoCardRandomTravailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoCardRandomTravailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoCardRandomTravailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
