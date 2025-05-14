import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet,Router, ActivatedRoute  } from '@angular/router';
import { environment } from '../environments/environment.development';
import { NavBarComponent } from "./nav-bar/nav-bar.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    NavBarComponent,
    RouterOutlet,
]
})
export class AppComponent implements OnInit {


    constructor() {

}

  ngOnInit(): void {
 
    
  }
  
  

  title = 'stinkyprojectclient';
}
