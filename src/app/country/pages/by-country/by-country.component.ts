import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css'],
})
export class ByCountryComponent {
  searchText: string = '';

  constructor(private serviceCountry: CountryService) {}

  search() {
    this.serviceCountry.search(this.searchText)
    .subscribe(res => {
      console.log(res);
    });
  }
}
