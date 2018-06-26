
module.exports = [function () {
    this.ordersInCart = []

    this.addToCart = order => {
        const similiarOrderId =
            this.ordersInCart.findIndex(orderFromCart => 
                areOrderedProductVariantsIdentical(orderFromCart, order)
            )

        if (similiarOrderId !== -1) {
            this.ordersInCart[similiarOrderId].quantity++
            return
        }

        this.ordersInCart.push(order)

        function areOrderedProductVariantsIdentical(orderA, orderB) {
            return (orderA.product === orderB.product)
                && (orderA.color === orderB.color)
                && (orderA.size === orderB.size)
        }
    }

    this.removeFromCart = indexToRemove => {
        this.ordersInCart = this.ordersInCart.filter((order, index) => index !== indexToRemove)
    }

    this.getOrdersFromCart = () => this.ordersInCart

    this.getSubtotal = () =>
        this.ordersInCart
            .reduce((accumulator, order) => accumulator + order.getPriceWithoutDiscount(), 0)
    
    this.getShippingPrice = () => 500

    this.getDiscount = () =>
        this.ordersInCart
            .reduce((accumulator, order) => accumulator + order.getDiscount(), 0)
}]
