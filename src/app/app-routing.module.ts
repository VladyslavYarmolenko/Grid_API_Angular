import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewTableComponent } from "./components/view-table/view-table.component";
import { EditableTableComponent } from "./components/editable-table/editable-table.component";

const routes: Routes = [
  {path: '', redirectTo: 'view', pathMatch: 'full'},
  {path: 'view', component: ViewTableComponent, pathMatch: 'full'},
  {path: 'edit', component: EditableTableComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
