import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

import { HealthService } from './health.service';
import { SplashScreenComponent } from './splash-screen.component';

describe('SplashScreenComponent', () => {

  let fixture: ComponentFixture<SplashScreenComponent>;
  let component: SplashScreenComponent;
  let element: HTMLElement;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        HealthService
      ],
      declarations: [
        SplashScreenComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SplashScreenComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.nativeElement;
  });

});
