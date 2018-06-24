const angular = require('angular')
const mainAppProvider = require('mainAppProvider')
const mainApp = angular.module('mainApp', [])
mainAppProvider.set(mainApp)

mainApp.controller('mainController', ['$scope', function ($scope) {
    $scope.elements = require('./elements.json')
}])

mainApp.component('productPage', require('theme/productPage/productPage.component'))

