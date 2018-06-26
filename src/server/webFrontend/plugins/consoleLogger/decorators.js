const addToCart = require('./decoratorsLibrary/addToCart')
const getShippingPrice = require('./decoratorsLibrary/getShippingPrice')

module.exports = [
    ['cart', addToCart],
    ['cart', getShippingPrice]
]