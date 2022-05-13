import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgsBaseComponent } from './orgs-base.component';

describe('OrgsBaseComponent', () => {
  let component: OrgsBaseComponent;
  let fixture: ComponentFixture<OrgsBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgsBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgsBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
