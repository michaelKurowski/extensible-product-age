module.exports = {
    bindings: {
        text: '<'
    },
    template: require('./bigButton.pug'),
    controller: ['$scope', require('./bigButton.controller')]
}