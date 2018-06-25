
module.exports = [function () {
    this.itemsInCart = []

    this.addToCart = item => {
        this.itemsInCart.push(item)
    }

    this.removeFromCart = indexToRemove => {
        this.itemsInCart = this.itemsInCart.filter((item, index) => index !== indexToRemove)
    }

    this.getItemsFromCart = () => this.itemsInCart

    this.getCheckout = () =>
        this.itemsInCart
            .reduce((accumulator, item) => accumulator + item.price, 0)
}]
