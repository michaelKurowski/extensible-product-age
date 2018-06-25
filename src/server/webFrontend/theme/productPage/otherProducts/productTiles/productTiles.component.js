require('mainAppProvider').get().component('productTile', require('./productTile/productTile.component.js'))
module.exports = {
    bindings: {},
    template: require('./productTiles.pug'),
    controller: ['$scope', require('./productTiles.controller')]
}