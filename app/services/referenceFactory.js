(function(){
    var referenceFactory = function(){
        var references = [{
            type:'BOOK',
            index: 1475014758421,
            title:'Tequilla Mockingbird',
            authors:[{last: 'Lee', first:'Harper'}],
            year: 1962,
            city: 'New Orleans',
            publisher: 'Penguin'
        },{
            type:'BOOK',
            index: 1475014761093,
            title:'1001 Uses for the Peanut',
            authors:[{last:'Carver',first:'George Washington'}, {last:'Obici',first:'Amedeo'}],
            year: 1896,
            city: 'Tuskegee',
            publisher: 'Ben Franklin, LLC'
        },{
            type:'MAGAZINE',
            index: 1475014823058,
            title: 'iPhone 7- wtf apple',
            journal: 'WIRED',
            authors: [{last:'Williams', first:'Sue'},{last:'Balmer',first:'Steve'}],
            page: 14,
            month: 'September',
            year: 2016
        },{
            type: 'WEB',
            index: 1475014850837,
            title: 'Nyan Cat',
            sponsor: 'YouTube',
            url: 'https://www.youtube.com/watch?v=QH2-TGUlwu4',
            authors: [{last:'Torres',first:'Christopher'}],
            year: 2011,
            accessed: 2016
        }];
        var types = [
            {type:'BOOK', label:'book'},
            {type:'MAGAZINE', label:'magazine'},
            {type:'WEB', label:'website'}
        ];
        var factory = {};
        factory.getReferences = function(){
            return references;
        };
        factory.getTypes = function(){
            return types;
        };
        factory.getReference = function(index){
            for(var n = 0, len = references.length; n<len; n++){
                if(references[n].index === parseInt(index)){
                    return references[n];
                }
            }
            return {};
        };
        factory.addReference = function(newRef){
            references.push(newRef);
        };
        factory.purgeReference = function(index){
            console.log(references);
            for(var n = 0, len = references.length; n<len; n++){
                if(references[n].index === parseInt(index)){
                    references.splice(n,1);
                    break;
                }
            }
        }
        return factory;
    };
    angular.module('conceptApp').factory('referenceFactory', referenceFactory);
}());