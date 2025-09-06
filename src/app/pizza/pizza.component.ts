import { ChangeDetectionStrategy, Component, signal, computed, inject } from '@angular/core';
import { AVAILABLE_TOPPINGS, PizzaOrder, createPizzaOrder } from '../models/pizza-order';
import { BreadcrumbsComponent } from '../shared-ui/breadcrumbs/breadcrumbs.component';
import { CartService } from '../services/cart.service';
import { PizzaService } from '../services/pizza.service';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-pizza',
  imports: [BreadcrumbsComponent, MatButton],
  templateUrl: './pizza.component.html',
  styleUrl: './pizza.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PizzaComponent {
  protected readonly availableToppings = AVAILABLE_TOPPINGS;
  private readonly pizzaService = inject(PizzaService);

  protected readonly order = signal<{
    size: 'small' | 'medium' | 'large';
    ingredients: string[];
    specialInstructions?: string | null;
  }>({
    size: 'medium',
    ingredients: [],
    specialInstructions: ''
  });

  protected readonly loading = signal(false);
  protected readonly submitted = signal(false);
  protected readonly cartService = inject(CartService);
  protected readonly showLeaveModal = signal(false);

  protected readonly canSubmit = computed(() =>
    !!this.order().size && this.order().ingredients.length > 0 && !this.loading()
  );

  protected submitOrder() {
    const pizzaOrder = createPizzaOrder({
      size: this.order().size,
      ingredients: this.order().ingredients,
      specialInstructions: this.order().specialInstructions,
    });
    this.pizzaService.addPizzaOrder(pizzaOrder);
    this.cartService.addCartItem(pizzaOrder.id);
    this.submitted.set(true);
    this.loading.set(false);
    this.order.set({
      size: 'medium',
      ingredients: [],
      specialInstructions: ''
    });
  }

  protected newOrder() {
    this.submitted.set(false);
  }

  protected updateTopping(topping: string, checked: boolean | null) {
    this.order.update(order => ({
      ...order,
      ingredients: checked
        ? [...order.ingredients, topping]
        : order.ingredients.filter(t => t !== topping)
    }));
  }

  protected updateSize(size: 'small' | 'medium' | 'large') {
    this.order.update(order => ({ ...order, size }));
  }

  protected updateInstructions(value?: string | null) {
    this.order.update(order => ({ ...order, specialInstructions: value }));
  }

  protected attemptLeaveOrder() {
    if (this.order().ingredients.length > 0 || this.order().specialInstructions) {
      this.showLeaveModal.set(true);
    } else {
      this.clearOrderAndNavigate();
    }
  }

  protected closeLeaveModal() {
    this.showLeaveModal.set(false);
  }

  protected clearOrderAndNavigate() {
    this.order.set({
      size: 'medium',
      ingredients: [],
      specialInstructions: ''
    });
    this.submitted.set(false);
    this.showLeaveModal.set(false);
    // TODO: Add navigation logic here
  }
}
