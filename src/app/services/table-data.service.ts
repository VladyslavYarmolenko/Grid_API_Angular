import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { Person } from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class TableDataService {
  peopleData$ = new BehaviorSubject<Person[] | []>([]);
  selectedFieldId: string = '';

  constructor() { }

  setInitialPeopleData(data: any) : void {
    this.peopleData$.next(data);
    this.peopleData$.subscribe(res => console.log("SUBJECT", res));
  }

  setSelectedFieldId(fieldId: string): void {
    this.selectedFieldId = fieldId;
    console.log("ID_IN_SERVICE", this.selectedFieldId);
  }
}
