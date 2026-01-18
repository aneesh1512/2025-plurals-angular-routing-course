import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './products/detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AllComponent } from './products/all/all.component';

// Route path constants
export const HOME = 'home';
export const PRODUCTS = 'products';
export const PRODUCTS_DETAILS = 'details';
export const CART = 'cart';
export const CONTACT = 'contact';
export const ABOUT = 'about';
export const LOGIN = 'login';

export const routes: Routes = [
    {
    path: '',
    redirectTo: `/${HOME}`,
    pathMatch: 'full'
  },
  {
    path: HOME,
    component: HomeComponent
  },
  {
    path: PRODUCTS,
    children: [
      { 
        path: '',
        component: AllComponent,
      },

      {
        path: PRODUCTS_DETAILS,
        component: ProductDetailComponent
      }
    ]
  },
  {
    path: CART,
    component: CartComponent
  },
  {
    path: CONTACT,
    component: ContactComponent
  },
  {
    path: ABOUT,
    component: AboutComponent
  },
  {
    path: LOGIN,
    component: LoginComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
