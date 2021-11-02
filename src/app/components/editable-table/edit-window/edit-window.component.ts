import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from '@angular/material/snack-bar';

import { TableDataService } from "../../../services/table-data.service";
import { ApiDataService } from "../../../services/api-data.service";

import 'lodash';

declare var _: any;


@Component({
  selector: 'app-edit-window',
  templateUrl: './edit-window.component.html',
  styleUrls: ['./edit-window.component.scss']
})

export class EditWindowComponent implements OnInit {

  public editPersonDataGroup: FormGroup;
  public showingInputDate: string;

  constructor(public fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public tableDataService: TableDataService,
              public apiService: ApiDataService,
              public snackBar: MatSnackBar) {

    this.showingInputDate = new Date(data.row.dob.date)
      .toISOString()
      .split('T')[0];

    this.editPersonDataGroup = fb.group({
        name: new FormControl(data.row.name.first),
        lastName: new FormControl(data.row.name.last),
        gender: new FormControl(data.row.gender),
        birthday: new FormControl(this.showingInputDate),
        address: fb.group({
          country: new FormControl(data.row.location.country),
          city: new FormControl(data.row.location.city),
          street: new FormControl(data.row.location.street.name),
          number: new FormControl(data.row.location.street.number)
        }),
      }
    )
  }

  ngOnInit(): void {
  }

  openSnackBar(personCell: string): void {
    this.snackBar.open(`Updated person data with cell: ${personCell}`, 'Close')
  }

  editPerson(): void {

    let changedPersonData = _.cloneDeep(this.data.row);

    changedPersonData.name.first = this.editPersonDataGroup.value.name;
    changedPersonData.name.last = this.editPersonDataGroup.value.lastName;
    changedPersonData.gender = this.editPersonDataGroup.value.gender;
    changedPersonData.dob.date = this.editPersonDataGroup.value.birthday;
    changedPersonData.location.country = this.editPersonDataGroup.value.address.country;
    changedPersonData.location.city = this.editPersonDataGroup.value.address.city;
    changedPersonData.location.street.name = this.editPersonDataGroup.value.address.street;
    changedPersonData.location.street.number = this.editPersonDataGroup.value.address.number;

    this.apiService.updateApiData(changedPersonData);
    ///than I should working with response data

    this.tableDataService.setChangedPersonData(changedPersonData);

    this.openSnackBar(changedPersonData.cell);
  }
}
