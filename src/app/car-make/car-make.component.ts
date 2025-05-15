import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { CarMake } from '../car-make';
import { Make } from '../make';

@Component({
  selector: 'app-country-population',
  templateUrl: './car-make.component.html',
  styleUrl: './car-make.component.scss'
})

export class CarMakeComponent implements OnInit {
  public carMakes: CarMake[] = [];
  public makes: Make[] = [];

  constructor(private http: HttpClient) {
  
    }

    ngOnInit() {
      this.getCarsWithMakes();
    }

    getCarsWithMakes() {
    this.http.get<CarMake[]>(`${environment.baseUrl}api/Cars/`).subscribe({
      next:result => this.carMakes = result,
      error:error => console.error(error)
    });
  }

  
      
  }

