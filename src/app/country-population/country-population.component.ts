import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { CountryPopulation } from '../country-population';
import { ActivatedRoute } from '@angular/router';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-country-population',
  imports: [ RouterLink,],
  templateUrl: './country-population.component.html',
  styleUrl: './country-population.component.scss'
})
export class CountryPopulationComponent {
  public countryPopulation: CountryPopulation | undefined;
   

  
    constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {
    
      }
  
      ngOnInit() {
        this.getCountryPopulation();
      }
  
    getCountryPopulation() {
      let id = this.activatedRoute.snapshot.paramMap.get("id");
      this.http.get<CountryPopulation>(`${environment.baseUrl}api/Countries/GetPopulation/${id}`).subscribe({
        next:result => this.countryPopulation = result,
        error:error => console.error(error)
      });
        
    }
}
