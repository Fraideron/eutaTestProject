export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'ctrl'
    })

    .state('cp', {
      url: '/cp/:language',
      templateUrl: 'app/cp/cp.html',
      controller: 'ControllPanel',
      controllerAs: 'ctrl'
    })

  $urlRouterProvider.otherwise('/');
}
