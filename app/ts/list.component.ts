import {Component} from 'angular2/core';
import {Item} from './item'

@Component({
    selector: 'shoppinglist',
    templateUrl: 'app/ts/list.component.html',
    inputs: ['items']
})

export class ListComponent{
    onSelect(item:Item)
    {
        console.log(JSON.stringify(item));
    }


}