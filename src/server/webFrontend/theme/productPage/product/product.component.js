require('mainAppProvider').get().component('productSlideshow', require('./productSlideshow/productSlideshow.component.js'))
require('mainAppProvider').get().component('productInfo', require('./productInfo/productInfo.component.js'))
require('mainAppProvider').get().component('productDetails', require('./productDetails/productDetails.component.js'))
module.exports = {
    bindings: {
        viewedProduct: '<'
    },
    template: require('./product.pug'),
    controller: ['$scope', require('./product.controller')],
    controllerAs: 'ctrl'
}