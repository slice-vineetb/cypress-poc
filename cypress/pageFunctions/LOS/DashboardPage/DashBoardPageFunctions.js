import dashBoardPageObjects from "./DashBoardPageObjects";
import assertions from "../../../support/Assertions";

class DashBoardPageFunctions {
    validateDashBoardPage() {
        assertions.expectElementToBeVisible(dashBoardPageObjects.DashBoardTitle)
    }

    clickOnNewLoanButton(){
        cy.get(dashBoardPageObjects.newLoanButton).click()
    }

    enterApplicantName(name) {
        cy.typeText(dashBoardPageObjects.applicantNameField,name)
    }

    selectLoanType() {
        cy.get(dashBoardPageObjects.loanTypeDropdown).click()
        cy.get(dashBoardPageObjects.loanUpto5LOption).click()
    }

    enterAmount(amount) {
        cy.typeText(dashBoardPageObjects.AmountField,amount)
    }

    clickStartApplicationButton() {
        cy.get('.justify-end > .inline-flex').click()
    }

    createNewLoanApplication() {
        this.clickOnNewLoanButton();
        this.enterApplicantName('vineet mahesh bhat');
        this.selectLoanType();
        this.enterAmount('6000');
        this.clickStartApplicationButton();
    }

}
export default new DashBoardPageFunctions();