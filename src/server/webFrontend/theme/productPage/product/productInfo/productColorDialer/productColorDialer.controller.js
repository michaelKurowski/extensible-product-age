module.exports = function ($scope) {
    $scope.colorId = 0

    this.$onInit = () => {
        $scope.colors = this.colors
        $scope.chooseColor = this.chooseColor
    }

    this.chooseColor = colorId => {
        $scope.colorId = colorId
        this.setProductColor(colorId)
    }
}