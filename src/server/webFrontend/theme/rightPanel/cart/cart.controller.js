
module.exports = function ($scope, cart) {
    this.$onInit = () => {
        $scope.shoppingList = cart.getOrdersFromCart()
    }
}