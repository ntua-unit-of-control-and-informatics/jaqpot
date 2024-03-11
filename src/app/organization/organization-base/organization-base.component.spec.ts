import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationBaseComponent } from './organization-base.component';

describe('OrganizationBaseComponent', () => {
  let component: OrganizationBaseComponent;
  let fixture: ComponentFixture<OrganizationBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizationBaseComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
