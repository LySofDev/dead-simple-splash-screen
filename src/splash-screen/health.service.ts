import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class HealthService {

  constructor(
    private http: HttpClient
  ) {}

  isUp(url: string): Observable<boolean> {
    return this.http.get(url).pipe(
      map((response: any) => true),
      catchError((error: any) => of(false))
    );
  }

}
