class Product {
    constructor({
        name = null,
        price = null,
        category = null,
        sku = null,
        manufacturer = null,
        details =  null,
        material = null,
        sale = false,
        photos = [],
        colors = [],
        sizes = []
    } = {}) {
        this.name = name
        this.price = price
        this.category = category
        this.sku = sku
        this.manufacturer = manufacturer
        this.details = details
        this.material = material
        this.sale = sale
        this.photos = []
        this.colors = colors
        this.sizes = sizes
    }
}

module.exports = Product