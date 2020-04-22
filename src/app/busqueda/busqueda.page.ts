import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.page.html',
  styleUrls: ['./busqueda.page.scss'],
})
export class BusquedaPage implements OnInit {

  constructor(private route: Router) { }
  Back() {
    this.route.navigateByUrl('/home');
  }

  ngOnInit() {
  }

}
