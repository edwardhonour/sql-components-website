import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SqlComponentsModule, SqlDatepickerComponent, SqlRadioGroupComponent, SqlSelectComponent, SqlSubmitComponent } from 'sql-components';

@Component({
  selector: 'app-add-component-form',
  standalone: true,
  imports: [CommonModule, SqlComponentsModule, SqlSelectComponent, SqlSubmitComponent, SqlDatepickerComponent, SqlSelectComponent, SqlRadioGroupComponent],
  templateUrl: './add-component-form.component.html',
  styleUrls: ['./add-component-form.component.css']
})
export class AddComponentFormComponent {

}
