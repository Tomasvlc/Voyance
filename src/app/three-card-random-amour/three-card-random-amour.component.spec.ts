import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeCardRandomAmourComponent } from './three-card-random-amour.component';

describe('ThreeCardRandomAmourComponent', () => {
  let component: ThreeCardRandomAmourComponent;
  let fixture: ComponentFixture<ThreeCardRandomAmourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeCardRandomAmourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeCardRandomAmourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
