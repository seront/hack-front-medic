import { TestBed, inject } from '@angular/core/testing';

import { ServiceCardService } from './service-card.service';

describe('ServiceCardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceCardService]
    });
  });

  it('should be created', inject([ServiceCardService], (service: ServiceCardService) => {
    expect(service).toBeTruthy();
  }));
});
