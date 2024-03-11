import { TestBed, inject } from '@angular/core/testing';

import { FeatureInfoBuilderService } from './feature-info-builder.service';

describe('FeatuerInfoBuilderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeatureInfoBuilderService],
    });
  });

  it('should be created', inject(
    [FeatureInfoBuilderService],
    (service: FeatureInfoBuilderService) => {
      expect(service).toBeTruthy();
    },
  ));
});
