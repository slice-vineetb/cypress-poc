import loginScreenObjects  from "../LoginPage/LoginScreenObjects";

class LoginPageFunctions {
    clickOnEmailField() {
        cy.get(loginScreenObjects.emailField).click()
    }

    clickOnPasswordField() {
        cy.get(loginScreenObjects.passwordField).click()
    }

    fillEmail(email) {
        this.clickOnEmailField()
        cy.typeText(loginScreenObjects.emailField,email)
    }

    fillPassword(password) {
        this.clickOnEmailField()
        cy.typeText(loginScreenObjects.passwordField,password)
    }

    clickOnSignInButton() {
        cy.get(loginScreenObjects.signInBtn).click()
    }

    login() {
        cy.fixture('credentials').then((credentials)=>{
            this.clickOnEmailField()
            this.fillEmail(credentials.email);
            this.clickOnPasswordField();
            this.fillPassword(credentials.password)
            this.clickOnSignInButton()
        })
    }

    
}
export default new LoginPageFunctions();
