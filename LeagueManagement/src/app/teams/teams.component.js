angular
    .module('app')
    .component('teams', {
        templateUrl: 'app/teams/teams.html',
        controller: TeamController
    });

/** @ngInject */
function TeamController($http) {
    var vm = this;

    $http
        .get('app/teams/teams.json')
        .then(function(response) {
            vm.teams = response.data;
        });
}