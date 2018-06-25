module.exports = function () {
    return function (input) {
        const stringifiedPrice = `${input}`
        const CENTS_PART = 2
        const dollarsPart = stringifiedPrice.length - CENTS_PART

        const cents = stringifiedPrice.slice(-CENTS_PART)
        const dollars = stringifiedPrice.slice(0, dollarsPart)
        return `$${dollars}.${cents}`
    }
}