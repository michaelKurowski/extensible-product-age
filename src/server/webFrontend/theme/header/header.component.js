
module.exports = {
    bindings: {},
    template: require('./header.pug'),
    controller: ['$scope', require('./header.controller')]
}