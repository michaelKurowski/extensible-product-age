
module.exports = {
    bindings: {
        categoryID: '<'
    },
    template: require('./categoryField.pug'),
    controller: ['$scope', require('./categoryField.controller')]
}