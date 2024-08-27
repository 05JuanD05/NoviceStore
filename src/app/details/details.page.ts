import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../interfaz/itemProduct';
import { environment } from 'src/environments/environment';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit{

  public details!: Product;
  private id!: number;

  constructor(private readonly activeRouter: ActivatedRoute, private readonly apiService: ApiService, private router: Router) {}

  async ngOnInit(){
    this.activeRouter.params.subscribe( async (activeRouter) => {
      const url = environment.apiUrl + "products/" + activeRouter["id"];
    });
  }

  goToDetails() {
    this.router.navigate(['/cart']);
  }
}
