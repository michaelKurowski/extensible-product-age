module.exports = function ($scope) {
    $scope.sizeId = 0

    this.$onInit = () => {
        $scope.sizes = this.sizes
        $scope.chooseSize = this.chooseSize
    }

    this.$onChanges = () => {
        $scope.sizes = this.sizes
    }

    this.chooseSize = sizeId => {
        $scope.sizeId = sizeId
        this.setProductSize(sizeId)
    }
}