class OrderSummaryPageObjects {
    get nextButton() {
        return '.button > span'
    }

    get orderSummaryTitle() {
        return 'span.title'
    }

    get bestShippingMethodRadiobutton() {
        return ':nth-child(1) > :nth-child(1) > .radio'
    }

}
export default new OrderSummaryPageObjects();