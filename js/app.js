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

        $scope.isHidden = !$scope.isHidden;

        $scope.contacts = [
            {
                name: '8:00',
                phone: '01234567890',
                email: 'john@example.com'
            },{
                name: '9:00',
                phone: '09876543210',
                email: 'karan@email.com'
            },
            {
                name: '10:00',
                phone: '09876543210',
                email: 'karan@email.com'
            },
            {
                name: '11:00',
                phone: '09876543210',
                email: 'karan@email.com'
            },
            {
                name: '12:00',
                phone: '09876543210',
                email: 'karan@email.com'
            }
        ];

        $scope.dayweeks = [
            '',
            'Dom',
            'Lun',
            'Mar',
            'Mer',
            'Gio',
            'Ven',
            'Sab'
        ];




        // Generazione degli slot delle ore: dalle 8:00... alle ...19:00
        $scope.hourSlots = generaSlotOre();

        // Generazione degli slot interni
        $scope.slotInterni = generaSlotInterni();

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



function generaSlotOre() {
    var hourSlotsArray = [];
    var tmp = 8;
    for(var i = 0; i < 12; i++){
        hourSlotsArray.push(tmp+":00");
        tmp = (tmp + 1);
    }
    return hourSlotsArray;
}

function generaSlotInterni() {

    var slots = [];
    for(var i = 0; i < 7; i++){
        slots.push('');
    }

    return slots;
}