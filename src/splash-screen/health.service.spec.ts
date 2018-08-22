import { inject, TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { HealthService } from './health.service';

describe('HealthService', () => {
  let healthService: HealthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        HealthService
      ]
    });

    healthService = TestBed.get(HealthService);
    httpMock = TestBed.get(HttpTestingController);
  });

  describe(".isUp", () => {
    describe('given a single url', () => {

      describe('when the service is up', () => {
        it('returns true', (done: DoneFn) => {

          healthService
            .isUp('http://localhost:3000/status')
            .subscribe((res: boolean) => {
              expect(res).toBe(true);
              done();
            });

          let healthRequest = httpMock.expectOne('http://localhost:3000/status');
          healthRequest.flush({});

          httpMock.verify();
        });
      });

      describe('when the service is down', () => {
        it('returns false', (done: DoneFn) => {

          healthService
            .isUp('http://localhost:3000/status')
            .subscribe((res: boolean) => {
              expect(res).toBe(false);
              done();
            });

          let healthRequest = httpMock.expectOne('http://localhost:3000/status');
          healthRequest.error(new ErrorEvent('Service is down.'));

          httpMock.verify();
        });
      });
      
    });
  });
});
