module.exports = ['$delegate', '$log', addToCart]

function addToCart($delegate, $log) {
    const originalAddToCart = $delegate.addToCart
    $delegate.lastLoggedItem = null
    $delegate.addToCart = order => {
        originalAddToCart(order)
        $log.warn('[consoleLogger plugin] An item', order.product.name, 'has been added to the shopping list')
        $log.warn('[consoleLogger plugin] Last logged product:', $delegate.lastLoggedItem)
        $delegate.lastLoggedItem = order.product.name
    }
    return $delegate
}