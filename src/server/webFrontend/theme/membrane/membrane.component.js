
module.exports = {
    bindings: {},
    template: require('./membrane.pug'),
    controller: ['$scope', require('./membrane.controller')]
}