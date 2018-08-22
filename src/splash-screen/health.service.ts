import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class HealthService {

  isUp(url: string): Observable<boolean> {
    return of(true);
  }

}
