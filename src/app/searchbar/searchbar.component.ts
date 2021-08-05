import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  inStockChecked: boolean;
  searchValue: string;

  @Output() searchModelChanged: EventEmitter<any> = new EventEmitter();
  @Output() inStockChanged: EventEmitter<boolean> = new EventEmitter();


  constructor() {
    this.inStockChecked = false;
    this.searchValue = "";
  }

  onInStockChecked(value: boolean): void {
    // console.log("onSeachChanged");
    this.inStockChanged.emit(this.inStockChecked);
  }

  onSeachChanged(value: string): void {
    this.searchValue = value;
    this.searchModelChanged.emit(this.searchValue);
  }

  ngOnInit(): void {
  }

}
