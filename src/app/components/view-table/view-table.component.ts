import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { TableDataService } from "../../services/table-data.service";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";


@Component({
  selector: 'app-view-table',
  templateUrl: './view-table.component.html',
  styleUrls: ['./view-table.component.scss'],
})

export class ViewTableComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['name', 'lastName', 'gender', 'birthday', 'address'];
  dataSource: any = new MatTableDataSource([]);

  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(private tableDataService: TableDataService) {
  }

  ngOnInit(): void {
    this.tableDataService.peopleData$
      .subscribe(result => this.dataSource.data = result);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
