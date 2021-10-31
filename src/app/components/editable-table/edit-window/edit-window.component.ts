import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-edit-window',
  templateUrl: './edit-window.component.html',
  styleUrls: ['./edit-window.component.scss']
})
export class EditWindowComponent implements OnInit {

  public editPersonDataGroup: FormGroup;

  constructor(public fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.editPersonDataGroup = fb.group({
        name: new FormControl(data.row.name.first),
        lastName: new FormControl(data.row.name.last),
        gender: new FormControl(data.row.gender),
        birthday: new FormControl(data.row.dob.date),
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

  editPerson() {
    console.log("FORM_DATA", this.editPersonDataGroup.value);
    let changedPersonData = {...this.data.row};
    changedPersonData.name.first = this.editPersonDataGroup.value.name;
    changedPersonData.name.last = this.editPersonDataGroup.value.last;
    changedPersonData.gender = this.editPersonDataGroup.value.gender;
    changedPersonData.dob.date = this.editPersonDataGroup.value.birthday;


    console.log('CHANGED_PERSON_DATA', changedPersonData)

  }
}
