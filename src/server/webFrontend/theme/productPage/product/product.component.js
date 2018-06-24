require('mainAppProvider').get().component('productSlideshow', require('./productSlideshow/productSlideshow.component.js'))
require('mainAppProvider').get().component('productInfo', require('./productInfo/productInfo.component.js'))
module.exports = {
    bindings: {},
    template: require('./product.pug'),
    controller: ['$scope', require('./product.controller')]
}