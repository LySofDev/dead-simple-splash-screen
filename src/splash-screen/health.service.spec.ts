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

  it('return true if service is up', (done) => {

    healthService
      .isUp('http://localhost:3000/status')
      .subscribe((res: any) => {
        expect(res).toBe(true);
        done();
      });

    let healthRequest = httpMock.expectOne('http://localhost:3000/status');
    healthRequest.flush({});

    httpMock.verify();
  });

});
