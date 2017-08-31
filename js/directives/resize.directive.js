(function() {
    'use strict';

    angular
        .module('app')
        .directive('resize', Resize);

    function Resize() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: ResizeController,
            controllerAs: 'vm',
            link: link,
            restrict: 'A',
            scope: true,
            require: '^helpMenu',
        };
        return directive;
        
        function link(scope, element, attrs, menuCtrl) {

            scope.CLICKED_RESIZE = false;
            scope.prevX = undefined;
            scope.prevY = undefined;
            
            element.bind('mousedown', function(event){
                scope.CLICKED_RESIZE = true;
                scope.prevX = event.clientX;
                scope.prevY = event.clientY;
            });

            angular.element(document).bind('mouseup', function(){
                scope.CLICKED_RESIZE = false;
                scope.prevX = undefined;
                scope.prevY = undefined;
            });           
            
            angular.element(document).bind('mousemove', function(event){
                if(scope.CLICKED_RESIZE){
                    if(event.clientY <= 0 || event.clientY >= $(document).height()
                        || event.clientX <= 0 || event.clientX >= $(document).width()){
                            scope.CLICKED_RESIZE = false;
                            scope.prevX = undefined;
                            scope.prevY = undefined;
                    }

                    var x = event.clientX;
                    var y = event.clientY

                    menuCtrl.resize(scope.prevX - x, scope.prevY - y);

                    scope.prevX = event.clientX;
                    scope.prevY = event.clientY;
                } 
            });
        }
    }
    /* @ngInject */
    function ResizeController () {
        
    }
})();