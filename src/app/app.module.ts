import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewTableComponent } from './components/view-table/view-table.component';
import { EditableTableComponent } from './components/editable-table/editable-table.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from "@angular/material/table";
import { HttpClientModule } from "@angular/common/http";
import { GetApiDataService } from "./services/get-api-data.service";
import { MatPaginatorModule } from "@angular/material/paginator";
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { TableDataService } from "./services/table-data.service";
import { MatListModule } from "@angular/material/list";
import { MatSortModule } from "@angular/material/sort";
import { EditWindowComponent } from './components/editable-table/edit-window/edit-window.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    ViewTableComponent,
    EditableTableComponent,
    ToolbarComponent,
    EditWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatListModule,
    MatSortModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
  ],
  providers: [GetApiDataService, TableDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
