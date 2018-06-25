const angular = require('angular')
const buildCore = require('core/buildCore')

const mainAppProvider = require('mainAppProvider')
const mainAppCoreProvider = require('mainAppCoreProvider')

const mainAppCore = angular.module('mainApp.core', [])
mainAppCoreProvider.set(mainAppCore)
buildCore()

const mainApp = angular.module('mainApp', ['mainApp.core'])
mainAppProvider.set(mainApp)

mainApp.controller('index', require('theme/index.controller'))

