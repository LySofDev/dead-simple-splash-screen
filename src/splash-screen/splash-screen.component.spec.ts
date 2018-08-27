import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { Component, Injectable } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';

import { HealthService } from './health.service';
import { SplashScreenComponent } from './splash-screen.component';

// Mock class for the HealthService
@Injectable()
class MockHealthService {
  isUpResult: boolean;

  constructor(isUpResult: boolean) {
    this.isUpResult = isUpResult;
  }

  isUp(url: string): Observable<boolean> {
    return of(this.isUpResult);
  }

}

// Configuration for the TestBed
interface TestBedConfiguration {
  isUpResult: boolean;
}

describe('SplashScreenComponent', () => {

  let healthService: HealthService;
  let fixture: ComponentFixture<SplashScreenComponent>;
  let component: SplashScreenComponent;
  let element: HTMLElement;

  function configureTestBed(config: TestBedConfiguration) {
    TestBed
      .configureTestingModule({
        declarations: [
          SplashScreenComponent
        ],
        providers: [
          {
            provide: HealthService,
            useFactory: () => new MockHealthService(config.isUpResult)
          }
        ]
      })
      .compileComponents();

      // HealthService Mock and Spy setup
      healthService = TestBed.get(HealthService);
      spyOn(healthService, 'isUp').and.callThrough();

      // Component references
      fixture = TestBed.createComponent(SplashScreenComponent);
      component = fixture.componentInstance;
      element = fixture.debugElement.nativeElement;
  }

  describe('when mounted', () => {

    beforeEach(async () => {
      configureTestBed({ isUpResult: true });
    });

    it('should call the isUp method on the HealthService', async(() => {
      fixture.detectChanges();
      expect(healthService.isUp).toHaveBeenCalled();
    }));

    it('should have a true loading attribute', () => {
      expect(component.loading).toBe(true);
    });

    it('should have an empty errors list', () => {
      expect(component.errors.length).toEqual(0);
    });

  });

  describe('when HealthService.isUp resolves to true', () => {

    beforeEach(async () => {
      configureTestBed({ isUpResult: true });
    });

    it('should have a false loading attribute', () => {
      fixture.detectChanges();
      expect(component.loading).toBe(false);
    });

    it('should have an empty errors list', () => {
      fixture.detectChanges();
      expect(component.errors.length).toEqual(0);
    });

  });

  describe('when HealthService.isUp resolves to false', () => {

    beforeEach(async () => {
      configureTestBed({ isUpResult: false });
    });

    it('should have a false loading attribute', () => {
      fixture.detectChanges();
      expect(component.loading).toBe(false);
    });

    it('should not have an empty errors list', () => {
      fixture.detectChanges();
      expect(component.errors.length).not.toEqual(0);
    });

  });

});
