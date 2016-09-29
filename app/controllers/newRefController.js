(function(){
    var newRefController = function(referenceFactory){
        var vm = this;
        vm.types = [];
        vm.workingRef = {authors:[{}]};
        vm.workingRef.index=Date.now();
        
        vm.addReference = function(){
            referenceFactory.addReference(vm.workingRef);
            window.location='#/';
        };
        
        vm.done = function(){
            window.location='#/';
        }
        
        init = function(){
            vm.types = referenceFactory.getTypes();
        };
        
        init();
    };
    
    angular.module('conceptApp').controller('newRefController', newRefController);
}());