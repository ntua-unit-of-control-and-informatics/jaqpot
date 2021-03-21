import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelMetaComponent } from './model-meta.component';

describe('ModelMetaComponent', () => {
  let component: ModelMetaComponent;
  let fixture: ComponentFixture<ModelMetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelMetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelMetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
