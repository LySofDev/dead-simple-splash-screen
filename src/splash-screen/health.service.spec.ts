import { inject, TestBed } from '@angular/core/testing';
import { HealthService } from './health.service';

describe('HealthService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HealthService
      ]
    })
  });

});
