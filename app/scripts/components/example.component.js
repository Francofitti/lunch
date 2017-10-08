'use strict';

/**
 * @ngdoc function
 * @name lunchApp.controller:DirectivesCtrl
 * @description
 * # DirectivesCtrl
 * Controller of the lunchApp
 */
angular.module('lunchApp')
  .component('parent',{
    template: parentTemplate(), 
    controllerAs: '$ctrl',
    controller: function($scope){
        //controller defined
        this.greeting = "Soy un componente"
        this.obj = {foo:'foo'}
        //scope defined
        $scope.greeting = "soy un componente!!";
        $scope.obj = {foo:'foo'};
        console.log($scope.$id);
        //las directivas hijas solo tienen acceso a $scope.
        //si quiero darles accesso a this.greeting o this.obj tengo que pasarselas
    }
  });

function parentTemplate (){
    return '<div class="card cont">'+
    '   <div class="card-block container">'+
    '       <h4 class="card-title">ParentComponent scope</h4>'+
    '       <div class="cont"> Controller = {{$ctrl.greeting}}</div>'+
    '       <div class="cont"> Controller = {{$ctrl.obj.foo}}</div>'+    
    '       <div class="cont"> $scope = {{greeting}}</div>'+
    '       <div class="cont"> $scope = {{obj.foo}}</div>'+        
    '       <no-scope ></no-scope>'+
    '       <child-scope ></child-scope>'+
    '       <isolated-scope obj="obj.foo"></isolated-scope>'+
    '   </div>'+
    '</div>';
}