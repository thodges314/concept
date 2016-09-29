(function(){
    var refDirective = function(){
        return {
            scope:{
                reference:"="
            },
            templateUrl:'app/views/singleRef.html'
        };
    };
    
    angular.module('conceptApp').directive('refDirective', refDirective);
}());
