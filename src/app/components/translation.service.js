'use strict';

export class TranslationService {

	constructor() {
		'ngInject';

		this.dictionary = {
			En: {
				NAME: 'Name',
				PASSWORD: 'Password',
				LOGIN: 'Log In',
				HELLO: 'Hello, ',
				LOGOUT: 'Log Out'	
			},

			Ua: {
				NAME: 'Ім`я',
				PASSWORD: 'Пароль',
				LOGIN: 'Увійти в систему',
				HELLO: 'Привіт, ',
				LOGOUT: 'Вийти з системи'
			}
		}
	}
}
