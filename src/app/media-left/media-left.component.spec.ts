import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaLeftComponent } from './media-left.component';

describe('MediaLeftComponent', () => {
  let component: MediaLeftComponent;
  let fixture: ComponentFixture<MediaLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
