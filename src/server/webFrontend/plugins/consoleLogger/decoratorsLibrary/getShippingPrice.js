module.exports = ['$delegate', '$log', getShippingPrice]

function getShippingPrice($delegate, $log) {
    const originalGetShippingPrice = $delegate.getShippingPrice
    $delegate.getShippingPrice = () => {
        const shippingPrice = originalGetShippingPrice()
        $log.warn('[consoleLogger plugin] Shipping price is', shippingPrice)
        return shippingPrice
    }
    return $delegate
}