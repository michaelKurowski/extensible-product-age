
module.exports = {
    bindings: {
        contentId: '<'
    },
    template: require('./authorization.pug'),
    controller: ['$scope', require('./authorization.controller')]
}