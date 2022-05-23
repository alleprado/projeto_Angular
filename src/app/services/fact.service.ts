
import { Fact } from '../fact';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class FactService {

  private url = "https://catfact.ninja/fact"

  constructor(private http: HttpClient) { }

  listarfacts(): Observable<Fact> {
    return this.http.get<Fact>(this.url);
  }

}
