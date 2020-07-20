import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoCardRandomFinanceComponent } from './two-card-random-finance.component';

describe('TwoCardRandomFinanceComponent', () => {
  let component: TwoCardRandomFinanceComponent;
  let fixture: ComponentFixture<TwoCardRandomFinanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoCardRandomFinanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoCardRandomFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
