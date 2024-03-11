import { TestBed } from '@angular/core/testing';

import { DiscussionBuilderService } from './discussion-builder.service';

describe('DiscussionBuilderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiscussionBuilderService = TestBed.get(
      DiscussionBuilderService,
    );
    expect(service).toBeTruthy();
  });
});
