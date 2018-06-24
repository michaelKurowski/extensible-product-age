class Product {
    constructor({
        name = null,
        availibleColorVariants = null,
        availibleSizes = null,
        price = null,
        category = null,
        sku = null,
        manufacturer = null,
        details =  null,
        material = null,
        sale = false,
        photos = []
    } = {}) {
        this.name = name
        this.availibleColorVariants = availibleColorVariants
        this.availibleSizes = availibleSizes
        this.price = price
        this.category = category
        this.sku = sku
        this.manufacturer = manufacturer
        this.details = details
        this.material = material
        this.sale = false
        this.photos = []
    }
}

module.exports = Product