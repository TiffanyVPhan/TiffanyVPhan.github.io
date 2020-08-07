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
    }

    get highlightPortfolio(): boolean {
        // Angular routing hecking sucks. Why is this a thing
        // https://medium.com/@tomastrajan/how-to-get-route-path-parameters-in-non-routed-angular-components-32fc90d9cb52
        // Just be lazy and do this:
        return location.pathname === '/';
        // <3 uwu
    }
}
