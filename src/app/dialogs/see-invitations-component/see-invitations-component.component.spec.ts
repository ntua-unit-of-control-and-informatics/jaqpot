import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeInvitationsComponentComponent } from './see-invitations-component.component';

describe('SeeInvitationsComponentComponent', () => {
  let component: SeeInvitationsComponentComponent;
  let fixture: ComponentFixture<SeeInvitationsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeInvitationsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeInvitationsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
