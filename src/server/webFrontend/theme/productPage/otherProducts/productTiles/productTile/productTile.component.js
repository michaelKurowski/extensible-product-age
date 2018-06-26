
module.exports = {
    bindings: {
        product: '<'
    },
    template: require('./productTile.pug'),
    controller: ['$scope', require('./productTile.controller')],
    controllerAs: 'ctrl'
}