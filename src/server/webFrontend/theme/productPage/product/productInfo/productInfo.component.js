require('mainAppProvider').get().component('productColorDialer', require('./productColorDialer/productColorDialer.component.js'))
require('mainAppProvider').get().component('productSizeDialer', require('./productSizeDialer/productSizeDialer.component.js'))
module.exports = {
    bindings: {
        viewedProduct: '<'
    },
    template: require('./productInfo.pug'),
    controller: ['$scope', 'cart', 'Order', require('./productInfo.controller')]
}