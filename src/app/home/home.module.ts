import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { ApiService } from '../services/api.service';
import { HomePageRoutingModule } from './home-routing.module';
import { ProductsComponent } from '../products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesComponent } from '../categories/categories.component';
import { APIStore } from '../api/apiStore';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HttpClientModule
  ],
  declarations: [HomePage, ProductsComponent, CategoriesComponent],
  providers: [ApiService]
})
export class HomePageModule {}
