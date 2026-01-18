import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { ALL, CATEGORIES, Pie } from 'src/app/models/pie';
import { PieService } from 'src/app/services/pie.service';
import { CartButtonComponent } from "src/app/shared-ui/cart-button/cart-button.component";

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    imports: [CartButtonComponent, CurrencyPipe],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  readonly pie = input.required<Pie>();
  private readonly pieService = inject(PieService);
    protected readonly CATEGORIES = CATEGORIES;
    protected readonly ALL = ALL;
      protected readonly router = inject(Router);

  selectPie(pieId: string) {
   this.router.navigate([ 'products', ALL  ,'detail' ], { queryParams: { pieId },
    queryParamsHandling: 'merge'
    });
    // this.pieService.setSelectedPie(pieId);
    // route to the detail page
  }
}
