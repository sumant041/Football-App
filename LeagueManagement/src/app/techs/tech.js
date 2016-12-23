angular
    .module('app')
    .component('leagueTech', {
        templateUrl: 'app/techs/tech.html',
        bindings: {
            tech: '<'
        }
    });