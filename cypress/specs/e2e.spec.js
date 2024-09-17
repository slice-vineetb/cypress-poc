import homePageFunctions from "../pageFunctions/HomePage/HomePageFunctions";
import loginPageFunctions from "../pageFunctions/LoginPage/LoginScreenFunction"
import orderSummaryPageFunctions from "../pageFunctions/OrderSummaryPage/OrderSummaryPageFunctions";
import paymentMethodPageFunctions from "../pageFunctions/PaymentMethodPage/PaymentMethodPageFunctions";
import productPageFunctions from "../pageFunctions/ProductPage/ProductPageFunctions";
import purchaseConfirmationPageFunctions from "../pageFunctions/PurchaseConfirmationPage/PurchaseConfirmationPageFunctions";
import searchResultsPageFunctions from "../pageFunctions/SearchResultsPage/SearchResultsPageFunctions";

describe('E2e test', () => {
    before(() => {
      cy.visit('/');
    });
  
    it('Should place order:', () => {
      cy.compareSnapshot('homePage', {errorThreshold: 1, failSilently: true}).then(comparisonResults => {
        console.log(comparisonResults.mismatchedPixels)
        console.log(comparisonResults.percentage) 
        console.log(comparisonResults.error) 
      })
        homePageFunctions.clickOnSignIn();
        loginPageFunctions.login();
        homePageFunctions.validateGreetingMessage(); //assert
        
        homePageFunctions.searchProduct()
        searchResultsPageFunctions.validateSearchResultsPage() //assert

        searchResultsPageFunctions.clickOnFirstProduct()
        productPageFunctions.validateProductName() //assert

        productPageFunctions.changeQuantityTo(2);
        productPageFunctions.addToCart()
        productPageFunctions.scrollTillSuccessMessage()
        productPageFunctions.validateSuccessMessage() //assert

        productPageFunctions.clickOnCartCounter();
        productPageFunctions.clickOnProceedToCheckoutButton()
        orderSummaryPageFunctions.validatePageTitle() //assert

        orderSummaryPageFunctions.checkBestShippingMethodradioButton()
        orderSummaryPageFunctions.clickOnNextButton()
        paymentMethodPageFunctions.validateShippingInformationAvailable() //assert

        paymentMethodPageFunctions.clickOnPlaceOrderButton()
        purchaseConfirmationPageFunctions.validatePurchaseConfirmation() //assert

    });
  
});