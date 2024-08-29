import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../interfaz/itemProduct';
import { ApiService } from '../services/api.service';
import { APIStore } from '../api/apiStore';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit{

  public details!: Product;
  private id!: number;
  productItem: APIStore | null = null;

  constructor(private readonly activeRouter: ActivatedRoute, private readonly apiService: ApiService, private readonly router: Router) {}

  async ngOnInit(){
    const id = this.activeRouter.snapshot.paramMap.get('id');
    if(id){
      this.apiService.getProductById(+id).subscribe(
        (data: APIStore) => {
          this.productItem = data;
        },
        (error) => {
          console.error('Error Mano', error)
        }
      )
    }
  }

  goToDetails() {
    this.router.navigate(['/cart']);
  }


}
