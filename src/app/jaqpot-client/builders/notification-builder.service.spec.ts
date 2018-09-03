import { TestBed, inject } from '@angular/core/testing';

import { NotificationBuilderService } from './notification-builder.service';

describe('NotificationBuilderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotificationBuilderService]
    });
  });

  it('should be created', inject([NotificationBuilderService], (service: NotificationBuilderService) => {
    expect(service).toBeTruthy();
  }));
});
