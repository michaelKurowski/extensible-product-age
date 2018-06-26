module.exports = () => {
    require('mainAppCoreProvider').get().service('cart', require('core/services/cart'))
    require('mainAppCoreProvider').get().service('productsGetter', require('core/services/productsGetter'))
    require('mainAppCoreProvider').get().service('createModel', require('core/services/createModel'))
}

