import { Component, inject } from '@angular/core';
import { Category } from '../models/pie';
import { PieService } from '../services/pie.service';
import { MatMenuItem, MatMenuTrigger, MatMenu } from '@angular/material/menu';
import { MatButton } from '@angular/material/button';
import { CartService } from '../services/cart.service';
import { AuthService } from '../services/auth.service';
import {HOME, PRODUCTS, CART, CONTACT, ABOUT, LOGIN} from '../app.routes';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    imports: [MatMenuItem, MatButton, MatMenuTrigger, MatMenu, RouterLink, RouterLinkActive]
})
export class HeaderComponent {
  protected readonly pieService = inject(PieService);
  protected readonly authService = inject(AuthService);
  protected cartService = inject(CartService);

  protected readonly HOME = HOME;
  protected readonly PRODUCTS = PRODUCTS;
  protected readonly CART = CART;
  protected readonly CONTACT = CONTACT;
  protected readonly ABOUT = ABOUT;
  protected readonly LOGIN = LOGIN;

  changeCategory(category: Category){
    this.pieService.setSelectedCategory(category);
  }
}
