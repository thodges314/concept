(function(){
    var editRefController = function($routeParams, referenceFactory){
        var vm = this;
        vm.types = [];
        vm.workingRef={};
        var index = $routeParams.index;    
        
        vm.saveReference = function(){
            referenceFactory.purgeReference(index);
            referenceFactory.addReference(vm.workingRef);
            window.location='#/';
        };
        
        vm.done = function(){
            window.location='#/';
        }
        
        init = function(){
            vm.workingRef = referenceFactory.getReference(index);
            vm.types = referenceFactory.getTypes();
            console.log(index);
        };
        
        init();
    };
    
    angular.module('conceptApp').controller('editRefController', editRefController);
}());