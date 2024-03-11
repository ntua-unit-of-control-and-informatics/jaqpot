import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchQuickViewComponent } from './search-quick-view.component';

describe('SearchQuickViewComponent', () => {
  let component: SearchQuickViewComponent;
  let fixture: ComponentFixture<SearchQuickViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchQuickViewComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchQuickViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
