import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { Person } from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class TableDataService {
  personsData$ = new BehaviorSubject<Person[] | []>([]);

  constructor() { }

  setPersonsData(data: any) : void {
    this.personsData$.next(data);
    this.personsData$.subscribe(res => console.log("SUBJECT", res));
  }
}
