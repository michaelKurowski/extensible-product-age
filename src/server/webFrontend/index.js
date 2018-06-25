const angular = require('angular')
const mainAppProvider = require('mainAppProvider')
const mainAppCoreProvider = require('mainAppCoreProvider')

const mainAppCore = angular.module('mainApp.core', [])
mainAppCoreProvider.set(mainAppCore)
const buildCore = require('core/buildCore')
buildCore()

const mainApp = angular.module('mainApp', ['mainApp.core'])
mainAppProvider.set(mainApp)

mainApp.controller('mainController', ['$scope', function ($scope) {}])
mainApp.component('index', require('theme/index.component'))

