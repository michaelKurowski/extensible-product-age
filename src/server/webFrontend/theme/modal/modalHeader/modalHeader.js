
module.exports = {
    bindings: {
        header: '<'
    },
    template: require('./authorization.pug'),
    controller: ['$scope', require('./authorization.controller')]
}