import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent {
  searchText: string = '';

  //emite hacia el padre
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  
  search(){
    this.onEnter.emit(this.searchText);
  }
}
