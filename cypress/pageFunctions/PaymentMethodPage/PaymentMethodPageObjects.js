class PaymentMethodPageObjects {
    get shippingMethod() {
        return '.shipping-information-content > .value'
    }

    get placeOrderButton() {
        return '.payment-method-content > :nth-child(4) > div.primary > .action > span'
    }

}
export default new PaymentMethodPageObjects();