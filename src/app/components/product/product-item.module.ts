import { CommonModule, CurrencyPipe } from '@angular/common';
import { NgModule } from '@angular/core';

import { PromoPipe } from './pipe/custom-promo.pipe';
import { ProductItemComponent } from './product-item.component';

@NgModule({
	declarations: [ProductItemComponent, PromoPipe],
	imports: [CommonModule, CurrencyPipe],
	exports: [ProductItemComponent],
})
export class ProductItemModule {}
