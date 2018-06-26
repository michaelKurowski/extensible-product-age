
module.exports = function ($scope, cart) {
    $scope.subtotal = null
    this.$onInit = () => {
        $scope.shoppingList = cart.getOrdersFromCart()
        $scope.CHECKOUT_LABEL = 'Go to checkout'
        $scope.getSubtotal = cart.getSubtotal
        $scope.shippingPrice = cart.getShippingPrice()
        $scope.getDiscount = cart.getDiscount
        $scope.getTax = cart.getTax
        $scope.getTotalPrice = cart.getTotalPrice
    }
}