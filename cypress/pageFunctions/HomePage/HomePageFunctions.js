import homePageObjects  from "../HomePage/HomePageObjects";
import assertions from "../../support/Assertions"

class HomePageFunctions {
    clickOnSignIn() {
        cy.get(homePageObjects.signIn).click()
    }

    clickOnSearchField() {
        cy.get(homePageObjects.searchField).click()
    }

    searchProduct() {
        this.clickOnSearchField()
        cy.typeText(homePageObjects.searchField, 'bottle')
        cy.get(homePageObjects.searchField).type('{enter}')
        
    }

    validateGreetingMessage() {
        assertions.expectTextToMatch(homePageObjects.greeetingMessage,'Welcome, Vineet Bhat!')
    }
}
export default new HomePageFunctions();
