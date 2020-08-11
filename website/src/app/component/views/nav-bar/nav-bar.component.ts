import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

declare var M: any;

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{

    public tabs: string[] = ['Portfolio', 'Other Projects', 'Resume', 'About', 'Hire Me'];
    public navb: string[] = ['navbar'];

    constructor(public router: Router, public route: ActivatedRoute) {
    }
    ngOnInit() {}

    ngAfterViewInit() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {});
          });
    }

    get onHomePage(): boolean {
        return location.pathname === '/';
    }

    get path(): string {
        return window.location.pathname;
    }

    setNavPos(): void {
        let prevScrollPos = window.pageYOffset;
        window.onscroll = (() => {
            const currentScrollPos = window.pageYOffset;
            if (prevScrollPos > currentScrollPos) {
                this.navb.splice(1, 1);
            } else {
                if (currentScrollPos > 60) {
                    this.navb.push('navbar-hide');
                }
            }
        });
    }
}
