module.exports = function ($scope, getProducts) {
    this.$onInit = () => {
        $scope.otherProducts = getProducts.getSimiliarProducts().slice(0, 8)
        $scope.similarProducts = getProducts.getSimiliarProducts().slice(0, 8)
        $scope.setViewedProduct = this.setViewedProduct
    }
}
