import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject, takeUntil } from "rxjs";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";

import { TableDataService } from "../../services/table-data.service";



@Component({
  selector: 'app-view-table',
  templateUrl: './view-table.component.html',
  styleUrls: ['./view-table.component.scss'],
})

export class ViewTableComponent implements OnInit, AfterViewInit, OnDestroy {

  ngUnsubscribe$ = new Subject<void>();
  displayedColumns: string[] = ['name', 'lastName', 'gender', 'birthday', 'address'];
  dataSource: any = new MatTableDataSource([]);

  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(private tableDataService: TableDataService) {
  }

  ngOnInit(): void {
    this.tableDataService.peopleData$
      .pipe(takeUntil(this.ngUnsubscribe$))
      .subscribe(result => this.dataSource.data = result);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }
}
