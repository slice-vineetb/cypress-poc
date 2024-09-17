class LoginScreenObjects {
    get emailField()  {
        return '#email'
    }

    get passwordField() {
        return '.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass'
    }

    get signInBtn() {
        return '.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2'
    }
}
export default new LoginScreenObjects();