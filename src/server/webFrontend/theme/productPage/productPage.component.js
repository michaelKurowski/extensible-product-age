require('mainAppProvider').get().component('product', require('./product/product.component.js'))
require('mainAppProvider').get().component('otherProducts', require('./otherProducts/otherProducts.component.js'))
module.exports = {
    bindings: {},
    template: require('./productPage.pug'),
    controller: ['$scope', 'Product', require('./productPage.controller')]
}