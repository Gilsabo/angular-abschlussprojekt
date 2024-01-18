import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-abschlussprojekt';
  cartProducts: any[] = [];
  subTotal: number = 0;
  constructor(private productService: ProductService, private router: Router) {
    this.productService.cartAddedSubject.subscribe((res) => {
      this.loadCart();
    });
  }

  ngOnInit(): void {
    this.loadCart();
  }
  redirectToSale() {
    this.router.navigateByUrl('/sale');
  }
  loadCart() {
    this.productService.getCartItemsByCustId(1).subscribe((res: any) => {
      this.cartProducts = res.data;
      this.cartProducts.forEach((element) => {
        this.subTotal = this.subTotal + element.productPrice;
      });
    });
  }
}
