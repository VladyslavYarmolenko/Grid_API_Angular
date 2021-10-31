import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-edit-window',
  templateUrl: './edit-window.component.html',
  styleUrls: ['./edit-window.component.scss']
})
export class EditWindowComponent implements OnInit {

  public editPersonDataGroup: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.editPersonDataGroup = new FormGroup({
      name: new FormControl(data.row.name.first),
      lastName: new FormControl(data.row.name.last),
      gender: new FormControl(data.row.gender),
      birthday: new FormControl(data.row.dob.date),
      address: new FormControl(data.row.location.country + ', '
        + data.row.location.city + ', '
        + data.row.location.street.name + ', '
        + data.row.location.street.number),
      }
    )
  }

  ngOnInit(): void {
  }

  editPerson(e:any) {
    console.log(e)
    console.log("FORM_DATA",this.editPersonDataGroup.value);
  }
}
