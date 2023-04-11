import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrls: ['./by-capital.component.css']
})
export class ByCapitalComponent {
  searchText: string = '';
  errorMessage: boolean = false;
  countries: Country[] = [];

  constructor(private serviceCountry: CountryService) {}

  searchByCapital( arg:string) {
    this.errorMessage = false;
    this.searchText = arg;
    this.serviceCountry.searchCapital(this.searchText)
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
