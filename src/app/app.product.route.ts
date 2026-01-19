import { DETAIL_ROUTE } from "./app.routes";
import { AllProductsComponent } from "./products/all-products/all-products.component";
import { ProductDetailComponent } from "./products/product-detail/product-detail.component";


export const PRODUCTS_ROUTE =  [
      {
        path: '',
        component: AllProductsComponent,
      },
      {
        path: DETAIL_ROUTE,
        component: ProductDetailComponent,
      }
    ]