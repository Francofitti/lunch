'use strict';

describe('Directive: examples', function () {

  // load the directive's module
  beforeEach(module('lunchApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<examples></examples>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the examples directive');
  }));
});
