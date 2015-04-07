import {Component, Template, Foreach, bootstrap} from 'angular2/angular2';

@Component({
    selector: 'app'
})

@Template({
    url: 'components/dm-items/dm-items.html',
    directives: [Foreach]
})

export class DmItems {
    constructor() {
        this.item = '';
        this.items = [];
    }
    
    addItem($event, name) {
        if ($event.which === 13 && name.length) {
            this.item = name;
            this.items.push(name);
            $event.target.value = '';
        }
    }
}