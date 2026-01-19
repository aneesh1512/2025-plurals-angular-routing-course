import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BreadcrumbsComponent } from "../shared-ui/breadcrumbs/breadcrumbs.component";

@Component({
  selector: 'app-wrapper',
  imports: [RouterOutlet, BreadcrumbsComponent],
  templateUrl: './wrapper.component.html'
})
export class WrapperComponent {

}
