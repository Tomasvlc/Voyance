import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoCardRandomAmourComponent } from './two-card-random-amour.component';

describe('TwoCardRandomAmourComponent', () => {
  let component: TwoCardRandomAmourComponent;
  let fixture: ComponentFixture<TwoCardRandomAmourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoCardRandomAmourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoCardRandomAmourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
