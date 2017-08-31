(function() {
    'use strict';

    angular
        .module('app')
        .directive('helpMenu', Menu);

    function Menu() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            controller: MenuController,
            controllerAs: 'vm',
            link: link,
            restrict: 'E',
            require:'helpMenu',
            scope: true,
            template: 
            `<div class="help-menu" ng-style="{'top': top, 'left': left, 'width': width, 'height': height}">                
                <button draggable>Move here</button>            
                <ul>
                    <li>{{top}}</li>
                    <li>{{left}}</li>
                </ul>
                <button class="resize" resize>Resize here</button>
            </div>`
        };
        return directive;

        function link(scope, element, attrs, helpMenuCtrl) {

            scope.getWidth = function(){
                return $('.help-menu').width();
            }

            scope.getHeight = function(){
                return $('.help-menu').height();
            }
            
        }        
    }

    function MenuController($scope){

        this.changePosition = function(x, y){
            $scope.$apply(function(){
                $scope.top = y + 'px';
                $scope.left = x + 'px';
            });                
        };

        this.resize = function(diffX, diffY){
            $scope.$apply(function(){
                $scope.width = ($scope.getWidth() - diffX) + 'px';
                $scope.height = ($scope.getHeight() - diffY) + 'px';
            });
        }
    }
})();