import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkbenchBaseComponent } from './workbench-base.component';

describe('WorkbenchBaseComponent', () => {
  let component: WorkbenchBaseComponent;
  let fixture: ComponentFixture<WorkbenchBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkbenchBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkbenchBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
