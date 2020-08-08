import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

    public tabs: string[] = ['Portfolio', 'Other Projects', 'Resume', 'About', 'Hire Me'];

    constructor(public router: Router, public route: ActivatedRoute) {
        console.log(window.location.pathname);
    }

    get onHomePage(): boolean {
        return location.pathname === '/';
    }

    get path(): string {
        return window.location.pathname;
    }
}
