import {Component, Template, bootstrap} from 'angular2/angular2';

@Template({
	url: 'app/tmpl/app.html'
})

@Component({
	selector: 'my-app'
})

class nameChange {
	constructor() {
		this.name = '';
	}

	changeName(newName) {
		this.name = newName;
	}
}

export function main() {
	bootstrap(nameChange);
}