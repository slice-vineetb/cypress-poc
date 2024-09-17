import assertions from "../../support/Assertions";
import purchaseConfirmationPageObjects from "../PurchaseConfirmationPage/PurchaseConfirmationPageObjects"
class PurchaseConfirmationPageFunctions {
    validatePurchaseConfirmation() {
        assertions.expectTextToMatch(purchaseConfirmationPageObjects.purchaseConfirmationMessage,'Thank you for your purchase!')
    }

}
export default new PurchaseConfirmationPageFunctions();