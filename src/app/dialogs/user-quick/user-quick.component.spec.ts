import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserQuickComponent } from './user-quick.component';

describe('UserQuickComponent', () => {
  let component: UserQuickComponent;
  let fixture: ComponentFixture<UserQuickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserQuickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserQuickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
