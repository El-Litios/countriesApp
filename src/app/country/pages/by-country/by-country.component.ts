import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css'],
})
export class ByCountryComponent {
  searchText: string = '';
  errorMessage: boolean = false;
  countries: Country[] = [];

  constructor(private serviceCountry: CountryService) {}

  searchByCountry( arg:string) {
    this.errorMessage = false;
    this.searchText = arg;
    this.serviceCountry.search(this.searchText)
    .subscribe((res) => {
      console.log(res);
      this.countries = res;
    }, (err) => {
      this.errorMessage = true
      this.countries = []
    });
  }

  Suggests(term: string){
    this.errorMessage = false;
    
  }
}
