const Product = require('core/Product')
const PRODUCT_COLORS = require('core/productColors')

module.exports = function ($scope) {
    this.$onInit = () => {
        $scope.viewedProduct = new Product({
            name: 'Juno Jacket',
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            price: 8487,
            category: 'Default Category',
            sku: 'Some SKU',
            manufacturer: 'Some manufacturer',
            details:  'Some details',
            material: 'Some materials',
            sale: false,
            photos: [],
            colors: [PRODUCT_COLORS.RED, PRODUCT_COLORS.GREEN, PRODUCT_COLORS.BLUE]
        })
    }
}
