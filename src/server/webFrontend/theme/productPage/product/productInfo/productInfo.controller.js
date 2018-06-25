module.exports = function ($scope, cart) {
    $scope.colorId = 0
    $scope.sizeId = 0
    this.$onInit = () => {
        $scope.viewedProduct = this.viewedProduct
        $scope.setProductColor = this.setProductColor
        $scope.setProductSize = this.setProductSize
        $scope.addToCart = this.addToCart
    }

    this.addToCart = () => cart.addToCart(this.viewedProduct)

    this.setProductColor = colorId => {
        $scope.colorId = colorId
    }

    this.setProductSize = sizeId => {
        $scope.sizeId = sizeId
    }
}