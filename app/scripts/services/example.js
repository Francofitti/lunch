'use strict';

/**
 * @ngdoc service
 * @name lunchApp.example
 * @description
 * # example
 * Service in the lunchApp.
 */
angular.module('lunchApp')
  .service('example', function ($http) {
    this.doSomething = function(){
      console.log('do something!');
    }
    this.request = function() {
      return $http.get('https://rallycoding.herokuapp.com/api/music_albums');
    }
  });
