import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataModelViewComponent } from './data-model-view.component';

describe('DataModelViewComponent', () => {
  let component: DataModelViewComponent;
  let fixture: ComponentFixture<DataModelViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataModelViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataModelViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
