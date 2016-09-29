(function(){
    var refsController = function(referenceFactory){
        var vm = this;
        vm.refs = [];
        vm.types = [];
        vm.filters={
            type:''
        };
        
        vm.setFilter = function(filtTag) {
            vm.filters.type=filtTag;
            console.log(filtTag);
        };
        
        init = function(){
            vm.refs = referenceFactory.getReferences();
            vm.types = referenceFactory.getTypes();
        };
        
        vm.editReference = function(index){
            window.location="#/edit/"+index;
        };
        
        vm.purgeReference = function(index){
            referenceFactory.purgeReference(index);
        };
        
        vm.newReference = function(){
            window.location='#/new/';
        };
        
        init();
    };
    
    angular.module('conceptApp').controller('refsController', refsController);
}());