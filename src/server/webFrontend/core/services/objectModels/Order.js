module.exports = class Order {
    constructor({
        size = '',
        color = {name: 'empty', hex: 'rgba(0,0,0,0)'},
        product = null
    }) {
        this.size = size
        this.color = color
        this.product = product
        this.quantity = 1
    }

    getPriceWithoutDiscount() {
        return this.quantity * this.product.price
    }

    getPriceWithDiscount() {
        return this.getPriceWithoutDiscount() - this.getDiscount()
    }

    getDiscount() {
        return this.product.discount * this.quantity
    }

    getTax() {
        return Math.round(this.getPriceWithDiscount() * (1/20))
    }
}