module.exports = {
    bindings: {
        view: '<'
    },
    template: require('./cart.pug'),
    controller: ['$scope', 'cart', require('./cart.controller')]
}