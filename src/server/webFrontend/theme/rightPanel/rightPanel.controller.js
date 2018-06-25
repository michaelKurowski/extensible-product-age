const AVAILIBLE_VIEWS = require('./availibleViews')
module.exports = function ($scope) {
    this.$onInit = () => {
        $scope.view = this.view
        $scope.AVAILIBLE_VIEWS = AVAILIBLE_VIEWS
    }
}