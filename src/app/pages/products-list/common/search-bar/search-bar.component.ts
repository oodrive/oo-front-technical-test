import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

export type Action = { type: 'search' | 'reset'; value?: string };

@Component({
	selector: 'app-search-bar',
	standalone: true,
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
	],
	templateUrl: './search-bar.component.html',
	styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
	readonly resetAction = output<Action>();
	readonly searchAction = output<Action>();

	searchTerm = new FormControl('', Validators.required);

	search() {
		this.searchAction.emit({ type: 'search', value: this.searchTerm.value || '' });
	}

	reset() {
		this.searchTerm.reset();
		this.resetAction.emit({ type: 'reset' });
	}
}
