module.exports = {
    bindings: {
        view: '<'
    },
    template: require('./rightPanel.pug'),
    controller: ['$scope', require('./rightPanel.controller')]
}