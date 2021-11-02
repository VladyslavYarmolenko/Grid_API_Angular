import { Component, OnInit } from '@angular/core';

import { ApiDataService } from "./services/api-data.service";
import { TableDataService } from "./services/table-data.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  title = 'angular-api-task';

  constructor(private apiService: ApiDataService, private tableDataService: TableDataService) {
  }

  ngOnInit() {
    this.apiService.getAPIData()
      .subscribe(res => {
        this.tableDataService.setInitialPeopleData(res);
      });
  }
}
