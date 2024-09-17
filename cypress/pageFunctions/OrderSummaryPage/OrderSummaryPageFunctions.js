import assertions from "../../support/Assertions";
import orderSummaryPageObjects from "./OrderSummaryPageObjects";

class OrderSummaryPageFunctions {
    clickOnNextButton() {
        cy.waitTillVisible(orderSummaryPageObjects.nextButton)
        cy.get(orderSummaryPageObjects.nextButton).click()
    }

    checkBestShippingMethodradioButton() {
        cy.waitTillVisible(orderSummaryPageObjects.bestShippingMethodRadiobutton)
        cy.checkRadioButton(orderSummaryPageObjects.bestShippingMethodRadiobutton)
    }

    validatePageTitle() {
        assertions.expectTextToMatch(orderSummaryPageObjects.orderSummaryTitle, 'Order Summary')
    }


}
export default new OrderSummaryPageFunctions();