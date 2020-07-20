import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeCardRandomTravailComponent } from './three-card-random-travail.component';

describe('ThreeCardRandomTravailComponent', () => {
  let component: ThreeCardRandomTravailComponent;
  let fixture: ComponentFixture<ThreeCardRandomTravailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeCardRandomTravailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeCardRandomTravailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
