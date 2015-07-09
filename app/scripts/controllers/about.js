'use strict';

/**
 * @ngdoc function
 * @name temporalApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the temporalApp
 */
angular.module('temporalApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
