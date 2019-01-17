import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleDatasetComponent } from './simple-dataset.component';

describe('SimpleDatasetComponent', () => {
  let component: SimpleDatasetComponent;
  let fixture: ComponentFixture<SimpleDatasetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleDatasetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleDatasetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
