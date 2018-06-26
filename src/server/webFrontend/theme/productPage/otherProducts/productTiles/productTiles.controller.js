module.exports = function ($scope) {
    this.$onInit = () => {
        $scope.products = this.products
        $scope.setViewedProduct = this.setViewedProduct
    }
}
