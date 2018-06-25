module.exports = {
    bindings: {},
    template: require('./cart.pug'),
    controller: ['$scope', 'cart', require('./cart.controller')]
}