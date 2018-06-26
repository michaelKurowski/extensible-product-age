module.exports = function ($scope, cart, Order) {
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
        const choosedVariant = {
            size: this.viewedProduct.sizes[$scope.sizeId],
            color: this.viewedProduct.colors[$scope.colorId].name,
            product: this.viewedProduct
        }
        const order = Object.assign(Object.create(Order), choosedVariant)
        cart.addToCart(order)
    }

    this.setProductColor = colorId => {
        $scope.colorId = colorId
    }

    this.setProductSize = sizeId => {
        $scope.sizeId = sizeId
    }
}