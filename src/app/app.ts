import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { Router, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.html',
    styleUrls: ['./app.scss'],
    imports: [HeaderComponent, HomeComponent, RouterOutlet],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {

    router = inject(Router);

    constructor() {
        // console.log('Routes: ', this.router.config);
        // console.log('Routes: ', this.router.events.forEach(event => console.log(event)  ));
    }
}
