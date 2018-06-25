module.exports = () => {
    require('mainAppCoreProvider').get().service('cart', require('core/services/cart'))
}

