import { TestBed, inject } from '@angular/core/testing';

import { DatasetApiFacadeService } from './dataset-api-facade.service';

describe('DatasetApiFacadeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatasetApiFacadeService]
    });
  });

  it('should be created', inject([DatasetApiFacadeService], (service: DatasetApiFacadeService) => {
    expect(service).toBeTruthy();
  }));
});
