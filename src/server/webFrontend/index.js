const angular = require('angular')
const productPage = angular.module('productPage', [])

productPage.controller('mainController', ['$scope', function ($scope) {
    $scope.elements = require('./elements.json')
}])

productPage.component('productPage', require('./components/productPage/productPage.component'))