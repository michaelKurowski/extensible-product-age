
module.exports = {
    bindings: {
        visible: '<'
    },
    template: require('./acceptCookies.pug'),
    controller: ['$scope', require('./acceptCookies.controller')]
}