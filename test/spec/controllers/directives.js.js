'use strict';

describe('Controller: DirectivesJsCtrl', function () {

  // load the controller's module
  beforeEach(module('lunchApp'));

  var DirectivesJsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DirectivesJsCtrl = $controller('DirectivesJsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DirectivesJsCtrl.awesomeThings.length).toBe(3);
  });
});
