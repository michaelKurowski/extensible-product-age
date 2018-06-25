
module.exports = {
    bindings: {
        colors: '<',
        setProductColor: '<'
    },
    template: require('./productColorDialer.pug'),
    controller: ['$scope', require('./productColorDialer.controller')]
}