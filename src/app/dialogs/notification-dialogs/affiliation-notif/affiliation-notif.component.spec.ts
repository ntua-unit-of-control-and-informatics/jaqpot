import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliationNotifComponent } from './affiliation-notif.component';

describe('AffiliationNotifComponent', () => {
  let component: AffiliationNotifComponent;
  let fixture: ComponentFixture<AffiliationNotifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AffiliationNotifComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffiliationNotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
