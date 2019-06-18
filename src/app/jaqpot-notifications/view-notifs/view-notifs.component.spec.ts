import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNotifsComponent } from './view-notifs.component';

describe('ViewNotifsComponent', () => {
  let component: ViewNotifsComponent;
  let fixture: ComponentFixture<ViewNotifsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewNotifsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNotifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
