import { Component } from '@angular/core';
import { BreadcrumbsComponent } from 'src/app/shared-ui/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-not-admin',
  imports: [BreadcrumbsComponent],
  templateUrl: './not-admin.component.html',
  styleUrl: './not-admin.component.scss'
})
export class NotAdminComponent {

}
