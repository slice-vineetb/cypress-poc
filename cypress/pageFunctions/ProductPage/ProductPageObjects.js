class ProductPageObjects {
    get addToCartButton() {
        return '#product-addtocart-button > span'
    }

    get quantity() {
        return '#qty'
    }

    get cartCounter() {
        return '.counter-number'
    }

    get successMessage() {
        return '.message-success > div'
    }

    get proceedToCheckoutButton() {
        return '#top-cart-btn-checkout'
    }

    get productTitle() {
        return '.base'
    }

}
export default new ProductPageObjects();