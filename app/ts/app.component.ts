import {Component} from 'angular2/core';
import {Config} from './config.service'
import {Item} from './item';
import {ListComponent} from './list.component';
import {Injectable} from 'angular2/core';
@Component({
    selector: 'my-app',
    templateUrl : 'app/ts/app.component.html' ,
    directives: [ListComponent]
})

export class AppComponent {
    mainHeading = Config.MAIN_HEADING;
    items: Array<Item>;

    constructor(){
        this.items = 
        [
            new Item(1, "Fruit", "Test Fruit"),
            new Item(2, "Meat", "Test Meat"),
            new Item(3, "Dairy", "Test Dairy")
            
        ]
    }
}


