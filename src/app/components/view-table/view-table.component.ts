import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Person } from "../../interfaces";
import { TableDataService } from "../../services/table-data.service";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";


@Component({
  selector: 'app-view-table',
  templateUrl: './view-table.component.html',
  styleUrls: ['./view-table.component.scss'],
})

export class ViewTableComponent implements OnInit, AfterViewInit  {

  displayedColumns: string[] = ['name', 'lastName', 'gender', 'birthday', 'address'];
  dataSource: any = new MatTableDataSource([]);

  // @ViewChild(MatPaginator) paginator: MatPaginator | null;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(private tableDataService: TableDataService) {
    // this.paginator = null;
    // this.dataSource = new MatTableDataSource<Person[]>();
  }

  ngOnInit(): void {
    this.tableDataService.peopleData$
      .subscribe(result => this.dataSource.data = result);

    // this.api.dataLoader().subscribe(res => console.log(res))
      // .subscribe((res: Person[]) => {
      //   // @ts-ignore
      //   // this.dataSource.data = res;
      //   //   console.log(res);
      //   this.dataSource = res;
      //   }
      // );
    // this.dataSource = new MatTableDataSource<Person[]>(this.receivedData)
  }


  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
