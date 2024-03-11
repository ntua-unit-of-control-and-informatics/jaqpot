import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredArchiveComponent } from './pred-archive.component';

describe('PredArchiveComponent', () => {
  let component: PredArchiveComponent;
  let fixture: ComponentFixture<PredArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PredArchiveComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
