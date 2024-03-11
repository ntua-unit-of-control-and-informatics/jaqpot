import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttkBaseComponent } from './httk.base.component';

describe('HttkBase', () => {
  let component: HttkBaseComponent;
  let fixture: ComponentFixture<HttkBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HttkBaseComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttkBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
