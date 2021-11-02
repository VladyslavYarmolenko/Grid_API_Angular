import { Injectable } from '@angular/core';
import { BehaviorSubject, mergeMap, of } from "rxjs";
import { Person } from "../interfaces";


@Injectable({
  providedIn: 'root'
})

export class TableDataService {
  peopleData$ = new BehaviorSubject<Person[] | []>([]);
  changedPersonDataObj: Person | {} = {}
  selectedPersonCell: string = '';
  changedArr: Person[] | [] = [];


  constructor() {
  }

  setInitialPeopleData(data: any): void {
    this.peopleData$.next(data);
  }

  setSelectedFieldId(personCell: string): void {
    this.selectedPersonCell = personCell;
    console.log("ID_IN_SERVICE", this.selectedPersonCell);
  }

  setChangedPersonData(changedData: Person): void {
    this.changedPersonDataObj = changedData;

    this.peopleData$
      // .pipe(
      //   mergeMap(peopleArr => {
      //
      //       let changedArr = [...peopleArr]
      //       let selectedPersonIndex = changedArr.findIndex(elem => elem.cell === this.selectedPersonCell);
      //       changedArr.splice(selectedPersonIndex, 1, this.changedPersonDataObj);
      //
      //       return of(changedArr);
      //     }
      //   )
      // )


      // .pipe(
      //   map(peopleArr => {
      //
      //       let selectedPersonIndex = peopleArr.findIndex(elem => elem.cell === this.selectedPersonCell);
      //       peopleArr.splice(selectedPersonIndex, 1, this.changedPersonDataObj);
      //
      //       return of(peopleArr);
      //     }
      //   )
      // )

      .subscribe(peopleArr => {
        this.changedArr = [...peopleArr];
        let selectedPersonIndex = this.changedArr.findIndex(elem => elem.cell === this.selectedPersonCell);
        this.changedArr.splice(selectedPersonIndex, 1, this.changedPersonDataObj);
        console.log("CHANGED ARR", this.changedArr);
      })

    this.peopleData$.next(this.changedArr);
  }
}
