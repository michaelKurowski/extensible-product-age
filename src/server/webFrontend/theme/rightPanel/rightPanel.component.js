require('mainAppProvider').get().component('cart', require('./cart/cart.component'))
module.exports = {
    bindings: {
        view: '<',
        visible: '<'
    },
    template: require('./rightPanel.pug'),
    controller: ['$scope', require('./rightPanel.controller')],
    controllerAs: 'ctrl'
}