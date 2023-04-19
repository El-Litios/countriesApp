import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.css']
})
export class ByRegionComponent {
  searchText: string = '';
  errorMessage: boolean = false;
  countries: Country[] = [];

  constructor(private serviceCountry: CountryService) {}

  searchByRegion( arg:string) {
    this.errorMessage = false;
    this.searchText = arg;
    this.serviceCountry.searchRegion(this.searchText)
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
