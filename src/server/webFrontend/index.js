const angular = require('angular')
const mainAppProvider = require('mainAppProvider')
const mainAppCoreProvider = require('mainAppCoreProvider')

const mainAppCore = angular.module('mainApp.core', [])
mainAppCoreProvider.set(mainAppCore)
const buildCore = require('core/buildCore')
buildCore()

const mainApp = angular.module('mainApp', ['mainApp.core'])
mainAppProvider.set(mainApp)

mainApp.controller('mainController', ['$scope', function ($scope) {
    $scope.elements = require('./elements.json')
}])
mainApp.component('header', require('theme/header/header.component'))
mainApp.component('productPage', require('theme/productPage/productPage.component'))

mainApp.filter('formatPrice', require('theme/formatPrice.js'))

