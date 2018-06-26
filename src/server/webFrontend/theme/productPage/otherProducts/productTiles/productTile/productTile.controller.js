module.exports = function ($scope) {
    this.$onInit = () => {
        $scope.product = this.product
        $scope.setViewedProduct = this.setViewedProduct
    }
}
