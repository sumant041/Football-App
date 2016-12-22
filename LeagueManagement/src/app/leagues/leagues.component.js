angular
    .module('app')
    .component('leagues', {
        templateUrl: 'app/leagues/leagues.html',
        controller: LeagueController
    });

/** @ngInject */
function LeagueController($http) {
    var vm = this;

    $http
        .get('app/leagues/leagues.json')
        .then(function(response) {
            vm.leagues = response.data;
        });
}