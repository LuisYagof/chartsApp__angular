import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, delay } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('http://localhost:3000/chart')
  }

  getUsersStructured() {
    return this.getUsers()
      .pipe(
        delay(1500),
        map(data => {
          const labels = Object.keys(data)
          const values = Object.values(data)
          return { labels, values }
        })
      )
  }

}
