(function() {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    function MainController($scope) {        
        activate();

        //$scope.helpMenu = angular.element(ev.srcElement);

        ////////////////

        function activate() {
            $scope.msg = "Hello";
        }
    }
})();