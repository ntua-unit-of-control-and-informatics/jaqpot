import { TestBed, inject } from '@angular/core/testing';

import { DatasetFactoryService } from './dataset-factory.service';

describe('DatasetDummyFactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatasetFactoryService]
    });
  });

  it('should be created', inject([DatasetFactoryService], (service: DatasetFactoryService) => {
    expect(service).toBeTruthy();
  }));
});
