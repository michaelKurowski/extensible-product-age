const mockedProducts = require('mockedData/products.json')

module.exports = [function () {
    this.getSimiliarProducts = () => mockedProducts
}]