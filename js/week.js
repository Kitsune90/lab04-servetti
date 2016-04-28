/**
 * Created by kazuhira on 28/04/16.
 */
var weekApp = angular.module('weekApp');

weekApp.controller('weekApp', ["$scope",function($scope){

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

}]);

function generaSlotOre() {
    var hourSlotsArray = [];
    var tmp = 8;
    for(var i = 0; i < 12; i++){
        hourSlotsArray.push(tmp+":00");
        tmp = (tmp + 1);
    };
    return hourSlotsArray;
}

function generaSlotInterni() {
    var slotInterni = [];
    var tmp = 8;
    for(var i = 0; i < 7; i++){
        slotInterni.push(".");
        tmp = (tmp + 1);
    };
    return slotInterni;
}