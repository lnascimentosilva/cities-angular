import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {
  public ROOT_URl = 'http://localhost:1111/api/cities/queryByPage';

  constructor(private http: HttpClient) { }

  getCities(page: PageEvent): Observable<any> {
    return this.http.get(`${this.ROOT_URl}?page=${page.pageIndex}&size=${page.pageSize}`);
  }
}
