import loginScreenObjects  from "../LoginPage/LoginScreenObjects";

class LoginPageFunctions {
    clickOnEmailField() {
        cy.get(loginScreenObjects.emailField).click()
    }

    clickOnPasswordField() {
        cy.get(loginScreenObjects.passwordField).click()
    }

    fillEmail() {
        this.clickOnEmailField()
        cy.typeText(loginScreenObjects.emailField,'vineetbhat00@gmail.com')
    }

    fillPassword() {
        this.clickOnEmailField()
        cy.typeText(loginScreenObjects.passwordField,'Vineet@123')
    }

    clickOnSignInButton() {
        cy.get(loginScreenObjects.signInBtn).click()
    }

    login() {
        this.clickOnEmailField()
        this.fillEmail();
        this.clickOnPasswordField();
        this.fillPassword()
        this.clickOnSignInButton()
    }

    
}
export default new LoginPageFunctions();
