'use strict';

/**
 * @ngdoc function
 * @name temporalApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the temporalApp
 */
angular.module('temporalApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
