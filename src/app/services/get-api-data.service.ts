import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { url } from "../../environments/environment.prod";
import { Person, ReceivedData } from "../interfaces";
import { AsyncSubject, BehaviorSubject, Observable, Subject } from "rxjs";
import { map, mergeMap, switchMap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GetApiDataService {

  constructor(private http: HttpClient) {
  }

  getAPIData(): Observable<Array<Person>> {
    return this.http.get<ReceivedData>(url)
      .pipe(
        map(res => res.results)
      )
  }
}
