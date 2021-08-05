import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItemsService } from 'src/services/Items.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {
  @Input()
  items: any | undefined;

  @Input()
  searchValue: string;

  @Input()
  isInStock: boolean;

  @Output()
  public filterText: EventEmitter<{}> = new EventEmitter();


  constructor(itemsServices: ItemsService) {
    this.searchValue = "";
    this.isInStock = true;
  }

  ngOnInit(): void {
  }

  showInStock(value: boolean) {
    return this.items.filter((item: { isInStock: any; }) => item.isInStock);
  }
  // filterAvailable(): void {
  //   this.items.filter(item => item.stocked)
  // }

}
