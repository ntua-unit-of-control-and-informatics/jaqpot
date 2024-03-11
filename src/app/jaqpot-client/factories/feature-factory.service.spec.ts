import { TestBed, inject } from '@angular/core/testing';

import { FeatureFactoryService } from './feature-factory.service';

describe('FeatureFactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeatureFactoryService],
    });
  });

  it('should be created', inject(
    [FeatureFactoryService],
    (service: FeatureFactoryService) => {
      expect(service).toBeTruthy();
    },
  ));
});
