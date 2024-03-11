import { TestBed, inject } from '@angular/core/testing';

import { NotificationFactoryService } from './notification-factory.service';

describe('NotificationFactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotificationFactoryService],
    });
  });

  it('should be created', inject(
    [NotificationFactoryService],
    (service: NotificationFactoryService) => {
      expect(service).toBeTruthy();
    },
  ));
});
