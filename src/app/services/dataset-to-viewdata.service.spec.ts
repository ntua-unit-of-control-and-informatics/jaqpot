import { TestBed, inject } from '@angular/core/testing';

import { DatasetToViewdataService } from './dataset-to-viewdata.service';

describe('DatasetToViewdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatasetToViewdataService]
    });
  });

  it('should be created', inject([DatasetToViewdataService], (service: DatasetToViewdataService) => {
    expect(service).toBeTruthy();
  }));
});
