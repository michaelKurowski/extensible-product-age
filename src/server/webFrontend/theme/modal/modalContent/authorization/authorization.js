
module.exports = {
    bindings: {
        headerId: '<',
        contentId: '<'
    },
    template: require('./authorization.pug'),
    controller: ['$scope', require('./authorization.controller')]
}