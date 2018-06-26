
module.exports = {
    bindings: {
        product: '<',
        setViewedProduct: '<'
    },
    template: require('./productTile.pug'),
    controller: ['$scope', require('./productTile.controller')],
    controllerAs: 'ctrl'
}