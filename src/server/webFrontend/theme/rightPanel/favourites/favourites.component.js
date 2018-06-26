module.exports = {
    bindings: {},
    template: require('./favourites.pug'),
    controller: ['$scope', 'favourites', require('./favourites.controller')]
}