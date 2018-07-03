import { Component, OnInit, Renderer, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
    selector: 'navbar-cmp',
    templateUrl: 'navbar.component.html'
})
export class NavbarComponent {
    
    private sidebarVisible: boolean = false;

    sidebarToggle(){
        var body = document.getElementsByTagName('body')[0];

        if(this.sidebarVisible == false){
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        } else {
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    }
}
