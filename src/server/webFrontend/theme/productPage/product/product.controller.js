module.exports = function ($scope) {
    this.$onInit = () => {
        $scope.viewedProduct = this.viewedProduct
    }

    this.$onChanges = () => {
        $scope.viewedProduct = this.viewedProduct
    }
}