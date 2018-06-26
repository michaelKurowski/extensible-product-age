
module.exports = {
    bindings: {
        modalType: '<'
    },
    template: require('./modal.pug'),
    controller: ['$scope', require('./modal.controller')]
}