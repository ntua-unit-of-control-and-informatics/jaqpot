import { TestBed, inject } from '@angular/core/testing';

import { DatasetBuilderService } from './dataset-builder.service';

describe('DatasetBuilderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatasetBuilderService],
    });
  });

  it('should be created', inject(
    [DatasetBuilderService],
    (service: DatasetBuilderService) => {
      expect(service).toBeTruthy();
    },
  ));
});
