import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
    selector: 'app-add-to-cart',
    templateUrl: './add-to-cart.component.html',
    styleUrls: ['./add-to-cart.component.scss'],
})
export class AddToCartComponent implements OnInit {
    constructor(private api: ApiService) {}

    @Input() product_id!: number;
    products = [];

    ngOnInit(): void {}

    addProduct(product_id: number) {
        this.api.getProducts().subscribe({
            next: (resp: []) => {
                this.products = resp;

                let cart = Array.from(
                    JSON.parse(localStorage.getItem('cart') as string)
                );

                let duplicateCartItem: any = cart.find(
                    (cartItm: any) => product_id == cartItm.id
                );

                if (duplicateCartItem) {
                    duplicateCartItem.amount++;
                } else {
                    duplicateCartItem.amount = 1;
                }

                let product = this.products.find(
                    (product: any) => product.id == product_id
                );

                let currentCart: any[] = [];

                if (!!localStorage.getItem('cart')) {
                    currentCart = Array.from(
                        JSON.parse(localStorage.getItem('cart') as string)
                    );
                }

                currentCart.push(product);
                localStorage.setItem('cart', JSON.stringify(currentCart));
            },
        });
    }
}
