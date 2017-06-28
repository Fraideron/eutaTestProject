export class MainController {
	constructor (user, translation, $state) {
		'ngInject';
		
		this.translation = translation.dictionary;
		this.translateLanguage = this.translation.En; 
		this.name = '';
		this.password = '';
		this.language = 'En';

		this.userService = user;
		this.state = $state;
	}

	login() {
		this.userService.login({
			login: this.name,
			pass: this.password
		});

		this.state.go('cp', {language: this.language} , {reload: true});
	}

	translate(){
		this.translateLanguage = this.translation[this.language];
	}

}