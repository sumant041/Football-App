angular
    .module('app')
    .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('app', {
            url: '/',
            component: 'app'
        }).state('leagues', {
            url: '/leagues',
            component: 'leagues'
        }).state('teams', {
            url: '/teams',
            component: 'teams'
        });
}