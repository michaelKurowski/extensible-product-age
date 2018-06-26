
const Order = require('./objectModels/Order')
const Product = require('./objectModels/Product')

module.exports = [function () {
    this.order = configObject => new Order(configObject)
    this.product = configObject => new Product(configObject)
}]