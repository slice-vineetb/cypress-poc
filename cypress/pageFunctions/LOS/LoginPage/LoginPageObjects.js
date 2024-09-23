class LoginPageObjects {
    get usernameField() {
        return '.lg\\:p-8 > .mx-auto > .gap-6 > .gap-2 > .grid > .p-4 > :nth-child(1) > .relative > .text-sm';
    }

    get passwordField() {
        return '.lg\\:p-8 > .mx-auto > .gap-6 > .gap-2 > .grid > .p-4 > :nth-child(2) > .relative > .text-sm';
    }

    get signInButton() {
        return '.lg\\:p-8 > .mx-auto > .gap-6 > .gap-2 > .grid > .p-4 > .justify-center';
    }
}
export default new LoginPageObjects();