import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
    selector: 'app-add-to-cart',
    templateUrl: './add-to-cart.component.html',
    styleUrls: ['./add-to-cart.component.scss'],
})
export class AddToCartComponent implements OnInit {
    constructor(private api: ApiService) {}

    products = [];

    ngOnInit(): void {}

    addProduct(id: number) {
        this.api.getProducts().subscribe({
            next: (resp: []) => {
                this.products = resp;
                const product = this.products.find(
                    (product: any) => product.id == id
                );

                let currentCart = localStorage.getItem('cart');

                // localStorage.setItem(
                //     'cart'
                //     // JSON.stringify([...currentCart, product])
                // );

                console.log(
                    JSON.stringify(localStorage.getItem('cart'), undefined, 4)
                );
            },
        });
    }
}
