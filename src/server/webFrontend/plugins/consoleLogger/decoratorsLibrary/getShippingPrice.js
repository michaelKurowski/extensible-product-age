module.exports = ['$delegate', '$log', getShippingPrice]

function getShippingPrice($delegate, $log) {
    const originalGetShippingPrice = $delegate.getShippingPrice
    $delegate.getShippingPrice = () => {
        originalGetShippingPrice()
        $log.warn('Shipping price is', originalGetShippingPrice())
    }
    return $delegate
}