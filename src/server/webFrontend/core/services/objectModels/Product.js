module.exports = class Product {
    constructor({        
        name = '',
        price = 0,
        category = '',
        sku = '',
        manufacturer = '',
        details = '',
        material = '',
        sale = false,
        photos = [],
        colors = [],
        sizes = [],
        discount = 0} = {}) {
        this.name = name
        this.price = price
        this.category = category
        this.sku = sku
        this.manufacturer = manufacturer
        this.details = details
        this.material = material
        this.sale = sale
        this.photos = photos
        this.colors = colors
        this.sizes = sizes
        this.discount = discount
    }
}
