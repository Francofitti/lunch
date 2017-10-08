'use strict';
function noScopeTemplate(){
    return '<div class="card cont">'+
    '<div class="card-block">'+
    '<h4 class="card-title">No scope object.</h4>'+
    '<div>{{greeting}}</div>'+
    '<div>{{obj.foo}}</div>'+
    '<input ng-model="greeting"></input>'        
    '</div>'+
    '</div>';
}

function isolatedScopeTemplate (){
    return '<div class="card cont">'+
    '<div class="card-block">'+
    '<h4 class="card-title">Isolated scope object.</h4>'+
    '<div>{{greeting}}</div>'+
    '<div>{{obj.foo}}</div>'+
    '<input ng-model="obj.foo"></input>'        
    '</div>'+
    '</div>';
}

function childScopeTemplate(){
  return '<div class="card cont">'+
  '<div class="card-block">'+
  '<h4 class="card-title">Child Scope object.</h4>'+
  '<div>{{greeting}}</div>'+
  '<div>{{obj.foo}}</div>'+
  '<input ng-model="greeting"></input>'    
  '</div>'+
  '</div>';
}
/**
 * @ngdoc directive
 * @name lunchApp.directive:examples
 * @description
 * # examples
 */
angular.module('lunchApp')
  .directive('noScope', function ($timeout) {
    return {
      template: noScopeTemplate(),
      restrict: 'E',
      scope:false,
      link: function postLink(scope) {
        console.log(scope.$id);
        scope.greeting = 'Parent greeting is overwritten';        
      }
    };
  })
  .directive('childScope', function () {
    return {
        template: childScopeTemplate(),
        restrict: 'E',
        scope:true,
        link: function postLink(scope) {
            scope.greeting = 'Good bye!';
            scope.obj.foo = 'bar';
        }
    };
  })
  .directive('isolatedScope', function () {
    return {
    template: isolatedScopeTemplate(),
    restrict: 'E',
    scope:{
        obj:'<'
    },
    link: function postLink(scope) {
        console.log(scope.greeting);
        scope.obj = {foo:'bar'};
    }
    };
  });

  