import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAccountsDialogComponent } from './manage-accounts-dialog.component';

describe('ManageAccountsDialogComponent', () => {
  let component: ManageAccountsDialogComponent;
  let fixture: ComponentFixture<ManageAccountsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageAccountsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAccountsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
