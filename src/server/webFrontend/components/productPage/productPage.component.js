module.exports = {
    bindings: {},
    template: require('./productPage.pug'),
    controller: ['$scope', 'elementsConfigLoader', require('./periodicTable.controller')]
}