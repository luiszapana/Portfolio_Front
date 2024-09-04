import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../model/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  url = 'http://localhost:8080/education/'

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Education[]>{
    return this.httpClient.get<Education[]>(this.url + 'list');
  }

  public details(id: number): Observable<Education>{
    return this.httpClient.get<Education>(this.url + `detail/${id}`)
  }

  public save(education: Education): Observable<any>{
    return this.httpClient.post<any>(this.url + 'create', education);
  }

  public update(id: number, education: Education): Observable<any>{
    return this.httpClient.put<any>(this.url + `update/${id}`, education);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }
}
