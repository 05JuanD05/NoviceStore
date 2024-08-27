import { Component, OnInit, Output } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

  @Output() products: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.loadCate();
  }

  loadCate(){
    this.apiService.getProducts().subscribe((data: string[]) => {
      this.products = data;
    });
  }
}
