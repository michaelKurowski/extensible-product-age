class Order {
    constructor(product, color, size) {
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
}

module.exports = Order