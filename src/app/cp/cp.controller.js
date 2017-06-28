export class ControllPanel {
	constructor (user,translation, $state) {
		'ngInject';
		this.translateLanguage = translation.dictionary[$state.params.language]; 
		this.userService = user;
		this.state = $state;
		this.username = this.userService.getUser().uname; 
	}

	logout(){
		this.userService.login({
			login: '',
			pass: ''
		});
		this.state.go('home');
	}

}
