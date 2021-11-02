import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { Subject, takeUntil } from "rxjs";
import { MatDialog } from "@angular/material/dialog";

import { TableDataService } from "../../services/table-data.service";

import { EditWindowComponent } from "./edit-window/edit-window.component";



@Component({
  selector: 'app-editable-table',
  templateUrl: './editable-table.component.html',
  styleUrls: ['./editable-table.component.scss']
})

export class EditableTableComponent implements OnInit, OnDestroy {

  ngUnsubscribe$ = new Subject<void>();
  displayedColumns: string[] = ['name', 'lastName', 'gender', 'birthday', 'address'];
  dataSource: any = new MatTableDataSource([]);

  constructor(private tableDataService: TableDataService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.tableDataService.peopleData$
      .pipe(takeUntil(this.ngUnsubscribe$))
      .subscribe(result => {
        this.dataSource.data = result
      });
  }

  changeRowData(row: any): void {
    this.tableDataService.setSelectedFieldId(row.cell);
    this.dialog.open(EditWindowComponent, {
      data: {row}
    })
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }
}
