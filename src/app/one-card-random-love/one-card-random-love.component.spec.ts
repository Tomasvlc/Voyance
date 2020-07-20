import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneCardRandomLoveComponent } from './one-card-random-love.component';

describe('OneCardRandomLoveComponent', () => {
  let component: OneCardRandomLoveComponent;
  let fixture: ComponentFixture<OneCardRandomLoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneCardRandomLoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneCardRandomLoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
