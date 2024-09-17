import assertions from "../../support/Assertions";
import paymentMethodPageObjects from "./PaymentMethodPageObjects";

class PaymentMethodPageFunctions {
    clickOnPlaceOrderButton() {
        cy.waitForElementToBeLoaded(paymentMethodPageObjects.placeOrderButton)
        cy.waitTillVisible(paymentMethodPageObjects.placeOrderButton)
        cy.get(paymentMethodPageObjects.placeOrderButton).click()
    }

    validateShippingInformationAvailable() {
        assertions.expectElementToBeVisible(paymentMethodPageObjects.shippingMethod)
    }

}
export default new PaymentMethodPageFunctions();