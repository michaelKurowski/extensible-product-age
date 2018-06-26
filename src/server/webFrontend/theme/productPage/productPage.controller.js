module.exports = function ($scope, Product, getProducts) {
    this.$onInit = () => {
        const viewedProductData = getProducts.getFirstProduct()
        const viewedProduct = Object.assign(Object.create(Product), viewedProductData)

        viewedProduct.logMyName()
        $scope.setViewedProduct = this.setViewedProduct
        $scope.setViewedProduct(viewedProduct)
    }

    this.setViewedProduct = product => {
        this.viewedProduct = product
        $scope.viewedProduct = product

    }
}
