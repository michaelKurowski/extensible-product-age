function addToCart($delegate, $log) {
    const originalAddToCart = $delegate.addToCart
    $delegate.lastLoggedItem = null
    $delegate.addToCart = order => {
        originalAddToCart(order)
        $log.warn('An item', order.product.name, 'has been added to the shopping list')
        $log.warn('Last logged product:', $delegate.lastLoggedItem)
        $delegate.lastLoggedItem = order.product.name
    }
    return $delegate
}

function getShippingPrice($delegate, $log) {
    const originalGetShippingPrice = $delegate.getShippingPrice
    $delegate.getShippingPrice = () => {
        originalGetShippingPrice()
        $log.warn('Shipping price is', originalGetShippingPrice())
    }
    return $delegate
}

module.exports = [
    ['cart', ['$delegate', '$log', addToCart]],
    ['cart', ['$delegate', '$log', getShippingPrice]]
]