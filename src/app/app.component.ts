import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FooterModule } from './components/footer/footer.module';
import { HeaderComponent } from './components/header/header.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [
		RouterOutlet,
		HeaderComponent,
		FooterModule,
	],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {
	title = 'oo-front-technical-test';
}
