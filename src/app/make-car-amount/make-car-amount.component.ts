import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { ActivatedRoute } from '@angular/router';
import { Router, RouterLink } from '@angular/router';
import { MakeCarAmount } from '../make-car-amount';

@Component({
  selector: 'app-country-population',
  imports: [ RouterLink,],
  templateUrl: './make-car-amount.component.html',
  styleUrl: './make-car-amount.component.scss'
})
export class MakeCarAmountComponent {
  public makeCarAmount: MakeCarAmount | undefined;
   

  
    constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {
    
      }
  
      ngOnInit() {
        this.getCarAmount();
      }
  
      getCarAmount() {
      let id = this.activatedRoute.snapshot.paramMap.get("id");
      this.http.get<MakeCarAmount>(`${environment.baseUrl}api/Makes/GetCarAmount/${id}`).subscribe({
        next:result => this.makeCarAmount = result,
        error:error => console.error(error)
      });
        
    }
}
