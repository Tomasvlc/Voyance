import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneCardRandomFinanceComponent } from './one-card-random-finance.component';

describe('OneCardRandomFinanceComponent', () => {
  let component: OneCardRandomFinanceComponent;
  let fixture: ComponentFixture<OneCardRandomFinanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneCardRandomFinanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneCardRandomFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
