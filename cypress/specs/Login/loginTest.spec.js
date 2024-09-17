import homePageFunctions from "../../pageFunctions/HomePage/HomePageFunctions";
import loginPageFunctions from "../../pageFunctions/LoginPage/LoginScreenFunction"
describe('Login Page Tests', () => {
    before(() => {
      cy.visit('/');
    });
  
    it('Should Login: valid credentials', () => {
        homePageFunctions.clickOnSignIn();
        loginPageFunctions.login();
        homePageFunctions.validateGreetingMessage()
    });
  
});