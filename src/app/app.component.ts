import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'toko-vanntastic';
  constructor(private router: Router) {
    this.router.navigate(['/transaksi']);
  }
}
