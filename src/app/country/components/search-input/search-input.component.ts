import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit{
  
  searchText: string = '';

  //emite hacia el padre
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  deBouncer: Subject<string> = new Subject();

  ngOnInit() {
    this.deBouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe( v => {
      this.onDebounce.emit(v);
      
    })
  }

  search(){
    this.onEnter.emit(this.searchText); 
  }

  keyPressed(){
    this.deBouncer.next(this.searchText);
  }
}
