import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { Component, Injectable } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';

import { HealthService } from './health.service';
import { SplashScreenComponent } from './splash-screen.component';

@Injectable()
class MockHealthService {
  isUp(url: string): Observable<boolean> {
    return of(true);
  }
}

describe('SplashScreenComponent', () => {

  let healthService: HealthService;
  let fixture: ComponentFixture<SplashScreenComponent>;
  let component: SplashScreenComponent;
  let element: HTMLElement;

  beforeEach(async () => {
    TestBed
      .configureTestingModule({
        declarations: [
          SplashScreenComponent
        ],
        providers: [
          { provide: HealthService, useClass: MockHealthService }
        ]
      })
      .compileComponents();
      healthService = TestBed.get(HealthService);
      fixture = TestBed.createComponent(SplashScreenComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
  });

  describe('when mounted', () => {

    it('will call the isUp method on the HealthService', async(() => {
      spyOn(healthService, 'isUp').and.callThrough();
      component.ngOnInit();
      expect(healthService.isUp).toHaveBeenCalled();
    }));

  });

});
