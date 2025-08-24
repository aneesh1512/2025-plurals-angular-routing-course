import { ChangeDetectionStrategy, Component, effect, inject, input } from '@angular/core';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { DetailCardComponent } from './detail-card/detail-card.component';
import { BreadcrumbsComponent } from 'src/app/shared-ui/breadcrumbs/breadcrumbs.component';
import { Category } from 'src/app/models/pie';
import { PieService } from 'src/app/services/pie.service';

@Component({
  selector: 'app-product-detail',
  imports: [SideMenuComponent, DetailCardComponent, BreadcrumbsComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailComponent {
  // inject the PieService to use it in the effect
  private readonly pieService = inject(PieService);

  // Use a signal input to bind the categoryId path param
  categoryId = input<Category>('All Pies');

  // Use an effect to respond to changes in the categoryId path segment
  categoryEffect = effect(() => {
    this.pieService.setSelectedCategory(this.categoryId());
  })
}
