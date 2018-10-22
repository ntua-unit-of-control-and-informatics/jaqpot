import { TestBed, inject } from '@angular/core/testing';

import { MetaBuilderService } from './meta-builder.service';

describe('MetaBuilderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MetaBuilderService]
    });
  });

  it('should be created', inject([MetaBuilderService], (service: MetaBuilderService) => {
    expect(service).toBeTruthy();
  }));
});
