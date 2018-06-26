module.exports = () => {
    require('mainAppCoreProvider').get().service('cart', require('core/services/cart'))
    require('mainAppCoreProvider').get().service('getProducts', require('core/services/getProducts'))
    require('mainAppCoreProvider').get().service('Product', require('core/services/Product'))
    require('mainAppCoreProvider').get().service('Order', require('core/services/Order'))
}

