import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const HOME_ROUTE = 'home';
export const PRODUCTS_ROUTE = 'products';
export const DETAIL_ROUTE = 'detail';
export const LOGIN_ROUTE = 'login';
export const CONTACT_ROUTE = 'contact';
export const CART_ROUTE = 'cart';
export const ABOUT_ROUTE = 'about';

export const routes: Routes = [
  {
    path: '',
    redirectTo: HOME_ROUTE,
    pathMatch: 'full',
  },
  {
    path: HOME_ROUTE,
    component: HomeComponent,
  },
  {
    path: `${PRODUCTS_ROUTE}/:categoryId`,
    loadComponent: () => import('./products/wrapper.component').then(m => m.WrapperComponent),
    loadChildren: () => import('./app.product.route').then(m => m.PRODUCTS_ROUTE),
  },
  {
    path: LOGIN_ROUTE,
    loadComponent: () => import('./login/login.component').then(m => m.LoginComponent),
  },
  {
    path: CONTACT_ROUTE,
    loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent),
  },
  {
    path: CART_ROUTE,
    loadComponent: () => import('./cart/cart.component').then(m => m.CartComponent),
  },
  {
    path: ABOUT_ROUTE,
    loadComponent: () => import('./about/about.component').then(m => m.AboutComponent),
  },
  {
    path: '**',
     loadComponent: () => import('./about/about.component').then(m => m.AboutComponent),
    component: NotFoundComponent,
  },
];
