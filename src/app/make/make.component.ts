import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Make } from '../make';

@Component({
  selector: 'app-makes',
  imports: [
      RouterLink,
    ],
  templateUrl: './make.component.html',
  styleUrl: './make.component.scss'
})
export class MakeComponent implements OnInit {
  public makes: Make[] = [];

  constructor(private http: HttpClient) {
  
    }

    ngOnInit() {
      this.getMakes();
    }

  getMakes() {
    this.http.get<Make[]>(`${environment.baseUrl}api/Makes`).subscribe({
      next:result => this.makes = result,
      error:error => console.error(error)
    });
      
  }
}
