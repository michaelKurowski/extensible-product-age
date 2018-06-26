module.exports = () => {
    require('mainAppCoreProvider').get().service('cart', require('core/services/cart'))
    require('mainAppCoreProvider').get().service('Product', require('core/services/Product'))
}

