let mainApp
module.exports = {
    get() {
        return mainApp
    },
    set(module) {
        mainApp = module
    }
}