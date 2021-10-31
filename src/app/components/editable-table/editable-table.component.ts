import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { TableDataService } from "../../services/table-data.service";
import { MatDialog } from "@angular/material/dialog";
import { EditWindowComponent } from "./edit-window/edit-window.component";

@Component({
  selector: 'app-editable-table',
  templateUrl: './editable-table.component.html',
  styleUrls: ['./editable-table.component.scss']
})

export class EditableTableComponent implements OnInit {

  displayedColumns: string[] = ['name', 'lastName', 'gender', 'birthday', 'address'];
  dataSource: any = new MatTableDataSource([]);


  constructor(private tableDataService: TableDataService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.tableDataService.personsData$
      .subscribe(result => this.dataSource.data = result);
  }

  changeRowData(row: any): void {
    console.log("ROW", row);
    this.dialog.open(EditWindowComponent, {
      data: { row }
    }).afterClosed().subscribe(result => console.log(result));
  }
}
