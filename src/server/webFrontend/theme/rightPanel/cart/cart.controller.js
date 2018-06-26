
module.exports = function ($scope, cart) {
    $scope.subtotal = null
    this.$onInit = () => {
        $scope.shoppingList = cart.getOrdersFromCart()
        $scope.CHECKOUT_LABEL = 'Go to checkout'
        $scope.subtotal = cart.getSubtotal()
        $scope.shippingPrice = cart.getShippingPrice()
        $scope.discount = cart.getDiscount()
    }
}