import { TestBed, inject } from '@angular/core/testing';

import { FeatureBuilderService } from './feature-builder.service';

describe('FeatureBuilderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeatureBuilderService],
    });
  });

  it('should be created', inject(
    [FeatureBuilderService],
    (service: FeatureBuilderService) => {
      expect(service).toBeTruthy();
    },
  ));
});
