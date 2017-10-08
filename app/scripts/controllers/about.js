'use strict';

/**
 * @ngdoc function
 * @name lunchApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the lunchApp
 */
angular.module('lunchApp')
  .controller('AboutCtrl', function ($scope, example) {
    example.doSomething();
    var promise = example.request();
    promise.then(function(data){
      console.log(data)
    }).catch(function(error){
      console.log(error);
    })
  });
