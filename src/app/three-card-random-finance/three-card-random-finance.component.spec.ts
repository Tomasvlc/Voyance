import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeCardRandomFinanceComponent } from './three-card-random-finance.component';

describe('ThreeCardRandomFinanceComponent', () => {
  let component: ThreeCardRandomFinanceComponent;
  let fixture: ComponentFixture<ThreeCardRandomFinanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeCardRandomFinanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeCardRandomFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
