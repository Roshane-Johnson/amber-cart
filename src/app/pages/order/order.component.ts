import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private dataService: DataService
    ) {}

    products: any[] = [];
    product: any = {};

    ngOnInit(): void {
        const orderID: string[] = [];

        // Generate Order ID
        for (let i = 0; i < 8; i++) {
            orderID.push(this.getRandomLetter());
        }

        this.dataService.sendGetRequest('/products').subscribe({
            next: (resp) => {
                this.products = resp;
            },
            complete: () => {
                this.route.params.subscribe({
                    next: (params) => {
                        const productId: number = params['id'];
                        this.product = this.products.find(
                            (product) => product.id == productId
                        );

                        this.product.orderId = orderID
                            .toString()
                            .split(',')
                            .join('');
                    },
                    error(err: Error) {
                        throw new Error(err.message);
                    },
                });
            },
        });
    }

    /**
     * Get a random uppercase letter from the alphabet
     * @returns string
     */
    getRandomLetter(): string {
        var words = [
            'A',
            'B',
            'C',
            'D',
            'E',
            'F',
            'G',
            'H',
            'I',
            'J',
            'K',
            'L',
            'M',
            'N',
            'O',
            'P',
            'Q',
            'R',
            'S',
            'T',
            'U',
            'V',
            'W',
            'X',
            'Y',
            'Z',
        ];
        return words[Math.floor(Math.random() * words.length)];
    }
}
