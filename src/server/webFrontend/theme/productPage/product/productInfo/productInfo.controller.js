const Order = require('classes/Order')

module.exports = function ($scope, cart) {
    $scope.colorId = 0
    $scope.sizeId = 0
    this.$onInit = () => {
        $scope.viewedProduct = this.viewedProduct
        $scope.setProductColor = this.setProductColor
        $scope.setProductSize = this.setProductSize
        $scope.ADD_TO_CART_LABEL = 'Add to cart'
        $scope.addToCart = this.addToCart
    }

    this.$onChanges = () => {
        $scope.viewedProduct = this.viewedProduct
        $scope.colorId = 0
        $scope.sizeId = 0
    }

    this.addToCart = () => {
        const size = this.viewedProduct.sizes[$scope.sizeId]
        const color = this.viewedProduct.colors[$scope.colorId].name
        const order = new Order(this.viewedProduct, size, color)
        cart.addToCart(order)
    }

    this.setProductColor = colorId => {
        $scope.colorId = colorId
    }

    this.setProductSize = sizeId => {
        $scope.sizeId = sizeId
    }
}