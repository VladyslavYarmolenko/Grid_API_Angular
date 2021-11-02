import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";

import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { MatSortModule } from "@angular/material/sort";
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from "@angular/material/dialog";

import { AppComponent } from './app.component';
import { ViewTableComponent } from './components/view-table/view-table.component';
import { EditableTableComponent } from './components/editable-table/editable-table.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { EditWindowComponent } from './components/editable-table/edit-window/edit-window.component';

import { ApiDataService } from "./services/api-data.service";
import { TableDataService } from "./services/table-data.service";
import { ErrorInterceptorService } from "./services/error-interceptor.service";


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
    MatToolbarModule,
    MatListModule,
    MatSortModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  providers: [
    ApiDataService,
    TableDataService,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
