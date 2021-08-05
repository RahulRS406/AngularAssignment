import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/services/Items.service';

@Component({
  selector: 'app-sale-dashboard',
  templateUrl: './sale-dashboard.component.html',
  styleUrls: ['./sale-dashboard.component.css']
})
export class SaleDashboardComponent implements OnInit {

  isStockChecked: boolean;
  items: any[];
  searchValueFromSearchbar: string;

  constructor(itemsServices: ItemsService) {
    this.items = itemsServices.getItems();
    this.isStockChecked = false;
    this.searchValueFromSearchbar = "";
  }

  ngOnInit(): void {
  }

  onInStockChecked(value: boolean): void {
    this.isStockChecked = value;
  }

  onSeachChanged(value: string): void {
    this.searchValueFromSearchbar = value;
  }
}
