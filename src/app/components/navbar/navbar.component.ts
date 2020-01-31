import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
  busqueda: string = "";
  constructor(private router: Router) {
    console.log(this.busqueda);
  }

  ngOnInit() {}

  
}
