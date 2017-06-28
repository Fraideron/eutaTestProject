'use strict';

export class UserService {

	constructor() {
		'ngInject';
	}

	login(opt) {
		this.uname = opt.login;
		this.pass = opt.pass;
	}

	getUser() {
		return {
			uname: this.uname,
			pass: this.pass
		};
	}
}
