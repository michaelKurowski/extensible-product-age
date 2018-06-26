const angular = require('angular')
const pluginsList = require('plugins/pluginsList.json')
const buildCore = require('core/buildCore')

const mainAppProvider = require('mainAppProvider')
const mainAppCoreProvider = require('mainAppCoreProvider')

const mainAppCore = angular.module('mainApp.core', [])
mainAppCoreProvider.set(mainAppCore)
buildCore()

loadPlugins()

const mainApp = angular.module('mainApp', ['mainApp.core'])
mainAppProvider.set(mainApp)

mainApp.controller('index', require('theme/index.controller'))

function loadPlugins() {
    pluginsList.forEach(pluginName => {
        const decorators = require(`plugins/${pluginName}/decorators`)
        mainAppCore.config(['$provide', 
            $provide => decorators.forEach(decorator => $provide.decorator(...decorator))
        ])
    })
}