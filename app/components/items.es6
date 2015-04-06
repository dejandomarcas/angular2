import {Component, Template, Foreach, bootstrap} from 'angular2/angular2';

@Component({
	selector: 'item-list'
	// TODO: use some storage engine
})

@Template({
	url: 'app/components/items.html',
	directives: [Foreach]
})

/* Constructor */
class itemList {
	constructor() {
		this.item = '';
		this.items = [];
	}

	addItem($event, name) {
		if ($event.which === 13) {
			this.item = name;
			this.items.push(name);
			$event.target.value = '';
		}
	}
}

/* Export */
export function main() {
	bootstrap(itemList);
}