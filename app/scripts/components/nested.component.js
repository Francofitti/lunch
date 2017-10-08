'use strict';

/**
 * @ngdoc function
 * @name lunchApp.controller:DirectivesCtrl
 * @description
 * # DirectivesCtrl
 * Controller of the lunchApp
 */
angular.module('lunchApp')
  .component('padre',{
    template: padreTemplate(), 
    controllerAs: '$ctrl',
    controller: function(){
        this.name = "Juan";
    }
  });

function padreTemplate (){
    return '<div class="card cont">'+
    '   <div class="card-block container">'+
    '       <div>Padre: {{$ctrl.name}}</div>'+
    '       <input ng-model="$ctrl.name"></input>' +        
    '       <hijo parent-name="$ctrl.name" ></hijo>'+
    '   </div>'+
    '</div>';
}

'use strict';
/**
 * @ngdoc function
 * @name lunchApp.controller:DirectivesCtrl
 * @description
 * # DirectivesCtrl
 * Controller of the lunchApp
 */
angular.module('lunchApp')
  .component('hijo',{
    template: hijoTemplate(), 
    controllerAs: 'vm',
    bindings:{
        parentName: '<',
    },
    controller: function($scope){
        this.name = 'Jorge;'
        this.$onInit = function(){
            // se ejecuta cuando llegan los bindings, despues de que se ejecute el $onChanges.
            this.name = this.parentName;
        }
    }
  });

function hijoTemplate (){
    return '<div class="card cont">'+
    '   <div class="card-block container">'+
    '       <div>Padre:{{vm.parentName}}</div>'+
    '       <div ng-if="vm.parentName == \'Juan\'">Hijo:{{vm.name}}</div>'+ 
    '       <input ng-model="vm.parentName"></input>' +            
    '   </div>'+
    '</div>';
}