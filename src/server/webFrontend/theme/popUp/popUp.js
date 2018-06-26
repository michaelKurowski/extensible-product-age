
module.exports = {
    bindings: {
        visible: '<',
        messageId: '<',
        status: '<' //GREEN, or RED
    },
    template: require('./acceptCookies.pug'),
    controller: ['$scope', require('./acceptCookies.controller')]
}