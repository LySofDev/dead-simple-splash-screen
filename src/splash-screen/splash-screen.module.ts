import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreenComponent } from './splash-screen.component';
import { HealthService } from './health.service';

@NgModule({
  declarations: [
    SplashScreenComponent
  ],
  exports: [
    SplashScreenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    HealthService
  ]
})
export class DeadSimpleSplashScreen {}
