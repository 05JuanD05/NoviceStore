import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent  implements OnInit {

  categories: string[] = [];

  constructor(private apiService: ApiService) { }

  async ngOnInit() {
    this.loadCategories();
  }

  loadCategories(){
    this.apiService.getCategories().subscribe(
      (categories: string[]) => {
        this.categories = categories;
        console.log('Categorías cargadas:', this.categories);
      }
    )
  }
}
