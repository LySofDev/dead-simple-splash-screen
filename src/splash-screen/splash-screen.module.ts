import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    HealthService
  ]
})
export class DeadSimpleSplashScreenModule {}
