import { Component, OnInit } from '@angular/core';
import { HealthService } from './health.service';

@Component({
  selector: 'dead-simple-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent implements OnInit {
  loading: boolean = true;
  errors: string[] = [];

  constructor(
    private healthService: HealthService
  ) {}

  ngOnInit() {
    this.healthService.isUp('').subscribe((up: boolean) => {
      this.loading = false;
      if (!up) this.errors.push("The service is not up.");
    });
  }

}
