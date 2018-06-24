require('mainAppProvider').get().component('product', require('./product/product.component.js'))
module.exports = {
    bindings: {},
    template: require('./productPage.pug'),
    controller: ['$scope', require('./productPage.controller')]
}