import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SqlComponentsModule, SqlDatepickerComponent, SqlFormComponent, SqlInputComponent, SqlRadioGroupComponent, SqlSelectComponent, SqlSubmitComponent, SqlTableComponent, SqlTextareaComponent } from 'sql-components';
import { Ng2SearchPipe, Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxTablePaginationModule } from 'ngx-table-pagination';

@Component({
  selector: 'app-component-list',
  standalone: true,
  imports: [CommonModule, SqlTableComponent, Ng2SearchPipeModule, NgxTablePaginationModule,
  SqlFormComponent,SqlInputComponent,SqlRadioGroupComponent, SqlSelectComponent, SqlDatepickerComponent, SqlSubmitComponent,
SqlTextareaComponent],
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.css']
})
export class ComponentListComponent {

}
