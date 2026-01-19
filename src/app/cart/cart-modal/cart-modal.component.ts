import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CartFormComponent } from "../cart-form/cart-form.component";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart-modal',
  imports: [CartFormComponent],
  templateUrl: './cart-modal.component.html',
  styleUrl: './cart-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartModalComponent {

  router = inject(Router);
  route = inject(ActivatedRoute)

  close() {
    this.router.navigate([{ outlets: { cartModal: null } }],
    {
      queryParamsHandling: 'merge'});
  }
  
}
