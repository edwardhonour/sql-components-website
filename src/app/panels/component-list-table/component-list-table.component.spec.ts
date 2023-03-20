import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentListTableComponent } from './component-list-table.component';

describe('ComponentListTableComponent', () => {
  let component: ComponentListTableComponent;
  let fixture: ComponentFixture<ComponentListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ComponentListTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
