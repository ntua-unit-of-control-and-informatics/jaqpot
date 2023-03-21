import { TestBed } from '@angular/core/testing';

import { OrganizationBuilderService } from './organization-builder.service';

describe('OrganizationBuilderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrganizationBuilderService = TestBed.get(OrganizationBuilderService);
    expect(service).toBeTruthy();
  });
});
