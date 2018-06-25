const AVAILIBLE_VIEWS = require('theme/rightPanel/availibleViews')
module.exports = function ($scope) {
    this.$onInit = () => {
        $scope.showCart = () => this.showRightPanel(AVAILIBLE_VIEWS.CART)
    }
}
