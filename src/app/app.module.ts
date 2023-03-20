import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { SqlComponentsModule } from 'sql-components';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxTablePaginationModule } from 'ngx-table-pagination';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SqlComponentsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule, NgxTablePaginationModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy },
              { provide: 'WEBSERVER', useValue: 'https://myna-api.com/api/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
