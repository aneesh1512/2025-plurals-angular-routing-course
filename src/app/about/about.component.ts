import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BreadcrumbsComponent } from "../shared-ui/breadcrumbs/breadcrumbs.component";
import { MESSAGE_SERVICE, MessageService } from '../services/message.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [BreadcrumbsComponent],
})
export class AboutComponent {
  readonly messageService = inject<MessageService>(MESSAGE_SERVICE, {optional: true});
}
