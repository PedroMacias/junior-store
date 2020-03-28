import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})
export class ProductComponent {

    @Input() product: Product;
    @Output() prductClicked: EventEmitter<any> = new EventEmitter();

    addCart() {
        console.log('Added to the car');
        this.prductClicked.emit(this.product.id);
    }
}
