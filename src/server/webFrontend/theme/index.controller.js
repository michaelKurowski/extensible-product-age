require('mainAppProvider').get().component('header', require('./header/header.component'))
require('mainAppProvider').get().component('productPage', require('./productPage/productPage.component'))
require('mainAppProvider').get().component('rightPanel', require('./rightPanel/rightPanel.component'))
require('mainAppProvider').get().component('bigButton', require('./universalComponents/bigButton/bigButton.component'))
require('mainAppProvider').get().filter('formatPrice', require('./formatPrice.js'))

module.exports = function ($scope) {
    this.isRightPanelVisible = false
    this.rightPanelType = null

    this.showRightPanel = panelToShow => {
        $scope.isRightPanelVisible = true
        $scope.rightPanelType = panelToShow
    }

    $scope.isRightPanelVisible = this.isRightPanelVisible
    $scope.rightPanelType = this.rightPanelType
    $scope.showRightPanel = this.showRightPanel
}