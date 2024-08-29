import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../interfaz/itemProduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartProdu: Product[] = [];
  private card = new BehaviorSubject<Product[]>([]);
  carta = this.card.asObservable();

  constructor() { }

  purchaseProdu(product: Product){
    this.cartProdu.push(product);
    this.card.next(this.cartProdu);
  }

  getItem(){
    return this.cartProdu;
  }
}
