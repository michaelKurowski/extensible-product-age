function getOrdersFromCart($delegate, $log) {
    const originalGetOrdersFromCart = $delegate.getOrdersFromCart
    $delegate.getOrdersFromCart = () => {
        originalGetOrdersFromCart()
        $log.warn('orders: ', originalGetOrdersFromCart())
    }
    return $delegate
}

module.exports = [
    ['cart', ['$delegate', '$log', getOrdersFromCart]]
]