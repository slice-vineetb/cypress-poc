import assertions from "../../../support/Assertions";
import loginPageObjects from "./LoginPageObjects";

class LoginPageFunctions {

    enterEmail() {
        cy.typeText(loginPageObjects.usernameField,'bo-user-1')
    }

    enterPassword() {
        cy.typeText(loginPageObjects.passwordField,'12345')
    }

    clickOnLoginButton() {
        cy.get(loginPageObjects.signInButton).click()
    }
}
export default new LoginPageFunctions();