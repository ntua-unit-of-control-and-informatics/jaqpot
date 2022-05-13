import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotsComponent } from './quots.component';

describe('QuotsComponent', () => {
  let component: QuotsComponent;
  let fixture: ComponentFixture<QuotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
