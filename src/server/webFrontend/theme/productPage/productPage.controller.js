//const Product = require('classes/Product')
const PRODUCT_COLORS = require('core/productColors')

module.exports = function ($scope, Product) {
    this.$onInit = () => {
        const viewedProductData = {
            name: 'Juno Jacket',
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            price: 8487,
            category: 'Default Category',
            sku: 'WX8AJ',
            manufacturer: 'Some manufacturer',
            details:  'Some details',
            material: 'Some materials',
            sale: false,
            photos: [],
            colors: [PRODUCT_COLORS.RED, PRODUCT_COLORS.GREEN, PRODUCT_COLORS.BLUE],
            discount: 2000
        }

        const viewedProduct = Object.assign(Object.create(Product), viewedProductData)

        viewedProduct.logMyName()
        $scope.viewedProduct = viewedProduct 
    }
}
