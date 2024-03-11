import { TestBed, inject } from '@angular/core/testing';

import { DataEntryBuilderService } from './data-entry-builder.service';

describe('DataEntryBuilderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataEntryBuilderService],
    });
  });

  it('should be created', inject(
    [DataEntryBuilderService],
    (service: DataEntryBuilderService) => {
      expect(service).toBeTruthy();
    },
  ));
});
