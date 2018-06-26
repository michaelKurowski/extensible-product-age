module.exports = {
    bindings: {},
    template: require('./find.pug'),
    controller: ['$scope', 'productsGetter', require('./find.controller')]
}