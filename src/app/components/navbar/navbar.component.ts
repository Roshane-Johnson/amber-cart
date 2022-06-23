import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
    constructor(private router: Router) {}

    app: AppConstants = {
        name: 'Amber Eats',
    };

    ngOnInit(): void {
        this.getRoutes();
    }

    getRoutes(): string[] {
        // console.log(this.router);

        return [''];
    }
}

interface AppConstants {
    name: string;
}
