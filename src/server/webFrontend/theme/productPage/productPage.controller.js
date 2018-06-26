module.exports = function ($scope, getProducts) {
    this.$onInit = () => {
        const viewedProduct = getProducts.getFirstProduct()
        viewedProduct.logMyName()
        $scope.setViewedProduct = this.setViewedProduct
        $scope.setViewedProduct(viewedProduct)
    }

    this.setViewedProduct = product => {
        this.viewedProduct = product
        $scope.viewedProduct = product
        scrollTo(0, 0)
    }
}
