import { Breed } from '../breed';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class BreedsService {

  constructor(private http: HttpClient) { }

  listarBreeds() : Observable<any>{
      return this.http.get<Breed[]>("https://catfact.ninja/breeds");
  }

}
