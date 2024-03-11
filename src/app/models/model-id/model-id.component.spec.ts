import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelIdComponent } from './model-id.component';

describe('ModelIdComponent', () => {
  let component: ModelIdComponent;
  let fixture: ComponentFixture<ModelIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModelIdComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
