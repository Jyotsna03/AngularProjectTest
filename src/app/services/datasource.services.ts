import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataSourceService {
  private dataUrl = '/assets/datasource.json'; // Path to datasource.json

  constructor(private http: HttpClient) {}

  // Fetch all records
  getRecords(): Observable<any[]> {
    return this.http.get<any[]>(this.dataUrl);
  }
}
