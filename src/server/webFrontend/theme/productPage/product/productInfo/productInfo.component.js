module.exports = {
    bindings: {},
    template: require('./productInfo.pug'),
    controller: ['$scope', require('./productInfo.controller')]
}