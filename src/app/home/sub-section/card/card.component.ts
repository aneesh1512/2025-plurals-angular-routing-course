import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DETAIL_ROUTE, PRODUCTS_ROUTE } from 'src/app/app.routes';
import { Pie } from 'src/app/models/pie';
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
  private readonly router = inject(Router);

  selectPie(pieId: string) {
    this.pieService.setSelectedPie(pieId);
    this.router.navigate([PRODUCTS_ROUTE, DETAIL_ROUTE])
  }
}
