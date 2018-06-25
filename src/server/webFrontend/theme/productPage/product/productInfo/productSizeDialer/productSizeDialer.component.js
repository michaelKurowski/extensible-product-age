
module.exports = {
    bindings: {
        sizes: '<',
        setProductSize: '<'
    },
    template: require('./productSizeDialer.pug'),
    controller: ['$scope', require('./productSizeDialer.controller')]
}