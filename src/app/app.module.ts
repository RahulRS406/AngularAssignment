import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaleDashboardComponent } from './sale-dashboard/sale-dashboard.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ProductTableComponent } from './product-table/product-table.component';
import { ItemsService } from 'src/services/Items.service';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './product-table/table-filter.pipe';
import { InStockPipe } from './product-table/table-inStock.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SaleDashboardComponent,
    SearchbarComponent,
    ProductTableComponent,
    FilterPipe,
    InStockPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
