import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponentFormComponent } from 'src/app/panels/add-component-form/add-component-form.component';

@Component({
  selector: 'app-add-component',
  standalone: true,
  imports: [CommonModule, AddComponentFormComponent],
  templateUrl: './add-component.component.html',
  styleUrls: ['./add-component.component.css']
})
export class AddComponentComponent {

}
