function logMyName($delegate, $log) {
    $delegate.logMyName = function () {
        $log.warn('product name: ', this.name)
    }
    return $delegate
}

module.exports = [
    ['Product', ['$delegate', '$log', logMyName]]
]