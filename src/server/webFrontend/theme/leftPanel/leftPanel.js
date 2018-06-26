
module.exports = {
    bindings: {
        visible: '<'
    },
    template: require('./leftPanel.pug'),
    controller: ['$scope', require('./leftPanel.controller')]
}