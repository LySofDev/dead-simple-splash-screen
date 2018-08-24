import { Component, OnInit } from '@angular/core';
import { HealthService } from './health.service';

@Component({
  selector: 'dead-simple-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent implements OnInit {

  constructor(
    private healthService: HealthService
  ) {}

  ngOnInit() {
    this.healthService.isUp('');
  }

}
