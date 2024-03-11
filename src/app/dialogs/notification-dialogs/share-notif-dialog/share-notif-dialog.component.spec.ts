import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareNotifDialogComponent } from './share-notif-dialog.component';

describe('ShareNotifDialogComponent', () => {
  let component: ShareNotifDialogComponent;
  let fixture: ComponentFixture<ShareNotifDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShareNotifDialogComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareNotifDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
