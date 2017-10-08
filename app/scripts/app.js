'use strict';

/**
 * @ngdoc overview
 * @name lunchApp
 * @description
 * # lunchApp
 *
 * Main module of the application.
 */
angular
  .module('lunchApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($routeProvider,$locationProvider,$stateProvider,$urlRouterProvider) {
    /*$locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/directives', {
        templateUrl: 'views/directives.html',
        controller: 'DirectivesCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });*/
      
      $urlRouterProvider
      .otherwise('/home');

      $stateProvider.state('main', {
        url: '/home',
        templateUrl: 'views/main.html'
      }).state('directives', {
        url: '/directives',
        templateUrl: 'views/directives.html'
      })
      .state('components', {
        url: '/components',
        templateUrl: 'views/components.html'
      })
      .state('nestedComponents', {
        url: '/nestedComponents',
        templateUrl: 'views/nestedcomponents.html'
      })
      .state('services', {
        url: '/services',
        templateUrl: 'views/services.html'
      });
  });
