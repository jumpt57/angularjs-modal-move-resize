(function() {
    'use strict';

    angular
        .module('app')
        .directive('draggable', Draggable);

    function Draggable() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            controllerAs: 'vm',
            link: link,
            restrict: 'A',
            scope: true,
            require: '^helpMenu',
            controller: DraggableController
        };
        return directive;        
        
        function link(scope, element, attrs, menuCtrl) {

            scope.CLICKED_MOVE = false;

            element.bind('mousedown', function(){
                scope.CLICKED_MOVE = true;
            });

            angular.element(document).bind('mouseup', function(){
                scope.CLICKED_MOVE = false;
            });           
            
            angular.element(document).bind('mousemove', function(event){
                if(scope.CLICKED_MOVE){
                    if(event.clientY <= 0 || event.clientY >= $(document).height()
                        || event.clientX <= 0 || event.clientX >= $(document).width()){
                            scope.CLICKED_MOVE = false;
                    }
                    
                    menuCtrl.changePosition(event.clientX - ($(element).width() / 2), event.clientY - ($(element).height() / 2));
                } 
            });
        }
    }

    function DraggableController(){
    }
})();