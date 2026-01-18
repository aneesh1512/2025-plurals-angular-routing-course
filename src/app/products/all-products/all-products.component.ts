import { ChangeDetectionStrategy, Component, effect, inject, input } from '@angular/core';
import { PieService } from '../../services/pie.service';
import { BreadcrumbsComponent } from 'src/app/shared-ui/breadcrumbs/breadcrumbs.component';
import { Router, RouterLink } from '@angular/router';
import { DETAIL_ROUTE } from 'src/app/app.routes';
import { ALL, Category } from 'src/app/models/pie';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss',
  imports: [BreadcrumbsComponent, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllProductsComponent {
  readonly pieService = inject(PieService);
  categoryId = input<Category>(ALL);

  pies = this.pieService.filteredPies;

  protected readonly DETAIL_ROUTE = DETAIL_ROUTE;

  eff2 = effect(() => {
    console.log('category', this.categoryId());
  });

  eff = effect(() => {
    this.pieService.setSelectedCategory(this.categoryId());
  });
}
