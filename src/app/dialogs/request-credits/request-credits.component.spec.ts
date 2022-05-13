import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestCreditsComponent } from './request-credits.component';

describe('RequestCreditsComponent', () => {
  let component: RequestCreditsComponent;
  let fixture: ComponentFixture<RequestCreditsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestCreditsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
