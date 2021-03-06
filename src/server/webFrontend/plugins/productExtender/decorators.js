function logMyName($delegate, $log) {
    const originalProductCreator = $delegate.product
    $delegate.product = function (argumentObject) {
        const newProduct = originalProductCreator(argumentObject)
        newProduct.logMyName = function () {
            $log.warn('[productExtender plugin] Product name: ', this.name)
        }
        return newProduct
    }
    return $delegate
}

module.exports = [
    ['createModel', ['$delegate', '$log', logMyName]]
]