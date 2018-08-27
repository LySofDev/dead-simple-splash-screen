import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { HealthService } from './health.service';

@Component({
  selector: 'dead-simple-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent implements OnInit, OnDestroy {
  loading: boolean = true;
  errors: string[] = [];
  animationInterval: number;
  animationCounter: number = 0;
  ellipseAnimation: string = "";
  @Input() endpoint: string;
  @Input() textColor: string = "white";
  @Input() backgroundColor: string = "black";

  constructor(
    private healthService: HealthService
  ) {}

  ngOnInit() {
    this.initializeAnimation();
    this.performHealthCheck();
  }

  ngOnDestroy() {
    window.clearInterval(this.animationInterval);
  }

  // Query the endpoint for a 200 status
  performHealthCheck() {
    this.healthService.isUp(this.endpoint).subscribe((up: boolean) => {
      this.loading = false;
      if (!up) this.errors.push("The service is not up.");
    });
  }

  // Animate the loading screen every half second.
  initializeAnimation() {
    this.animationInterval = window.setInterval(() => {
      if (this.animationCounter > 2) {
        this.animationCounter = 0;
        this.ellipseAnimation = "";
      } else {
        this.animationCounter += 1;
        this.ellipseAnimation += ".";
      }
    }, 500);
  }
}
