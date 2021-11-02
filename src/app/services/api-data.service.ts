import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { url } from "../../environments/environment.prod";
import { Person, ReceivedData } from "../interfaces";


@Injectable({
  providedIn: 'root'
})

export class ApiDataService {

  constructor(private http: HttpClient) {
  }

  getAPIData(): Observable<Array<Person>> {
    return this.http.get<ReceivedData>(url)
      .pipe(
        map(res => res.results),
      )
  }

  updateApiData(changedData: Person): Observable<Person> {
    return this.http.put(`'someURL'/${changedData.cell}`, changedData)
  }
}
