'use strict';

/**
 * @ngdoc function
 * @name lunchApp.controller:DirectivesCtrl
 * @description
 * # DirectivesCtrl
 * Controller of the lunchApp
 */
angular.module('lunchApp')
  .controller('DirectivesCtrl', function ($scope) {
    $scope.greeting = 'Hello';
    $scope.obj = {foo: 'foo'};
  });