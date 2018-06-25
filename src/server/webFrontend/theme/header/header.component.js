
module.exports = {
    bindings: {
        showRightPanel: '<'
    },
    template: require('./header.pug'),
    controller: ['$scope', require('./header.controller')]
}