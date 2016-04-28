var schedulerApp = angular.module('schedulerApp', [ 'ngRoute' ]);

schedulerApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/week/:year/:month/:day', {
        templateUrl: 'partials/week.html',
        controller: 'WeekController'
    });
    $routeProvider.when('/week/', {
        templateUrl: 'partials/week.html',
        controller: 'WeekController'
    });
    $routeProvider.when('/agenda/:year/:month/:day', {
        templateUrl: 'partials/agenda.html',
        controller:  'AgendaController'
    });
    $routeProvider.when('/agenda', {
        templateUrl: 'partials/agenda.html',
        controller:  'AgendaController'
    });
    $routeProvider.otherwise({redirectTo: '/week/0/0/0'});
}]);

/* optional, if you want to practice with angular-js directives */
/*
schedulerApp.directive('bookingCell', function() {
    return {
        restrict: 'AE',
        replace: 'true',
        template: '<td></td>',
        link: function(scope, elem, attrs) {

        }
    };
});
*/

schedulerApp.controller('AgendaController', ['$scope', '$rootScope', '$routeParams', 'reservationsFactory',
    function ($scope, $rootscope, $routeParams, reservationsFactory) {

    }
]);

schedulerApp.controller('WeekController', ['$scope', '$rootScope', '$routeParams', '$location', 'reservationsFactory',
    function ($scope, $rootScope, $routeParams, $location, reservationsFactory) {

        var reservations = reservationsFactory.getReservations();

    }]
);

schedulerApp.factory( 'reservationsFactory', function () {

    var reservations =  [];

    var factory = {};
    factory.getReservations = function ()  { return reservations; };
    factory.addReservation = function (o) {

        return o;
    };
    factory.delReservation = function (o) {

    };
    factory.saveReservations = function () {

    };

    return factory; 	// return the factory !
});
