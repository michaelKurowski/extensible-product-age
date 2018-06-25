const AVAILIBLE_VIEWS = require('./availibleViews')
module.exports = function ($scope) {
    $scope.visible = null
    this.$onInit = () => {
        $scope.view = this.view
        $scope.visible = this.visible
        $scope.AVAILIBLE_VIEWS = AVAILIBLE_VIEWS
    }
}