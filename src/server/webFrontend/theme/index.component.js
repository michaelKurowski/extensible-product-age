require('mainAppProvider').get().component('header', require('./header/header.component'))
require('mainAppProvider').get().component('productPage', require('./productPage/productPage.component'))
require('mainAppProvider').get().filter('formatPrice', require('./formatPrice.js'))
module.exports = {
    bindings: {},
    template: require('./index.pug'),
    controller: ['$scope', require('./index.controller')]
}