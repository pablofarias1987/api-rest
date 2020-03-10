import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class StarswarsService {

  constructor(private http: HttpClient) { }

  getStarwars(): Observable<any> {
    return this.http.get('http://localhost:6060/api/characters/luke');

  }

  getStarwars2(): Observable<any> {
    return this.http.get('http://localhost:6060/api/characters/darth-vader');

  }

}
