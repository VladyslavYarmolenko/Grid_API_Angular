import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GetApiDataService } from "./services/get-api-data.service";
import { Person } from "./interfaces";
import { TableDataService } from "./services/table-data.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  title = 'angular-api-task';
  data: [] | Person[] = [];

  constructor(private apiService: GetApiDataService, private tableDataService: TableDataService) {
  }

  ngOnInit() {
    this.apiService.getData()
      .subscribe(res => {
        this.tableDataService.setPersonsData(res);
      });
  }
}
