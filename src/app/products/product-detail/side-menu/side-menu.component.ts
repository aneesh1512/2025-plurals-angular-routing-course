import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PieService } from '../../../services/pie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ALL, CATEGORIES } from '../../../models/pie';

@Component({
    selector: 'app-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent {
  protected readonly pieService = inject(PieService);
  protected readonly router = inject(Router);
  route = inject(ActivatedRoute);
  protected readonly CATEGORIES = CATEGORIES;
  protected readonly ALL = ALL;

  selectPie(id: string){

    this.router.navigate([], { 
      relativeTo: this.route,
      queryParams: { pieId: id },
    queryParamsHandling: 'replace'
    });
    
    // this.pieService.setSelectedPie(id);
  }
}
