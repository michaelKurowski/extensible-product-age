function getOrdersFromCart($delegate, $log) {
    const originalGetOrdersFromCart = $delegate.getOrdersFromCart
    $delegate.getOrdersFromCart = () => {
        const ordersFromCart = originalGetOrdersFromCart()
        $log.warn('orders: ', ordersFromCart)
        return ordersFromCart
    }
    return $delegate
}

module.exports = [
    ['cart', ['$delegate', '$log', getOrdersFromCart]]
]