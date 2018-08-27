import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class HealthService {

  constructor(
    private http: HttpClient
  ) {}

  /**
  * Query an endpoint for a 200 status
  * @param url The full endpoint to query
  * @returns An observable boolean, true if service returned a 200 status.
  */
  isUp(url: string): Observable<boolean> {
    return this.http.get(url).pipe(
      map((response: any) => true),
      catchError((error: any) => of(false))
    );
  }

}
