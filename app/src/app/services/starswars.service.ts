import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class StarswarsService {
  
   constructor(private http: HttpClient) { }
 
   getProductList(): Observable<any> {
    return this.http.get('http://localhost:6060/api/characters/luke');
  }
   
    
  
}
