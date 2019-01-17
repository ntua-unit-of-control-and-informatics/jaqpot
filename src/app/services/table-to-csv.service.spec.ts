import { TestBed } from '@angular/core/testing';

import { DatasourceToCsvService } from './table-to-csv.service';

describe('TableToCsvService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatasourceToCsvService = TestBed.get(DatasourceToCsvService);
    expect(service).toBeTruthy();
  });
});
