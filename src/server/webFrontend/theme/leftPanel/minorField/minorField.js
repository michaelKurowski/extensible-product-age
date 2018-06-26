
module.exports = {
    bindings: {
        visible: '<'
    },
    template: require('./minorField.pug'),
    controller: ['$scope', require('./minorField.controller')]
}