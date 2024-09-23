import dashBoardPageFunctions from "../pageFunctions/LOS/DashboardPage/DashBoardPageFunctions";
import loanApplicationPageFunctions from "../pageFunctions/LOS/LoanApplicationPage/LoanApplicationPageFunctions";
import loginPageFunctions from "../pageFunctions/LOS/LoginPage/LoginPageFunctions";
import otpFunctions from "../pageFunctions/LOS/LoginPage/OtpFunctions";

describe('LOS e2e', () => {

  before('set localstorage key and value', () => {
    cy.window().then((window) => {
      window.localStorage.setItem('BANKOS_SVC', 'http://localhost:8103');
      cy.visit('http://localhost:8104');
    });
  })

  it('should move loan application to query draft', () => {
    loginPageFunctions.enterEmail();
    loginPageFunctions.enterPassword();
    loginPageFunctions.clickOnLoginButton();
    otpFunctions.enterOtp();
    otpFunctions.clickVerifyOtpButton();
    dashBoardPageFunctions.validateDashBoardPage(); //assert

    dashBoardPageFunctions.createNewLoanApplication()
    loanApplicationPageFunctions.validateLoanApplicationPage(); //assert
    loanApplicationPageFunctions.clickEditDetailsButton();

    loanApplicationPageFunctions.enterReferrerFullName('vineet mahesh bhat');

    loanApplicationPageFunctions.enterBorrowerBirthdate('2001-01-09');
    loanApplicationPageFunctions.enterReferrerBirthdate('2001-01-09');

    loanApplicationPageFunctions.enterBorrowerPan('EOFPB6850E');
    loanApplicationPageFunctions.clickBorrowerPanVerifyButton();

    loanApplicationPageFunctions.enterReferrerPan('EOFPB6850E');
    loanApplicationPageFunctions.clickReferrerPanVerifyButton();

    loanApplicationPageFunctions.enterBorrowerPhoneNumber('8105222603');
    loanApplicationPageFunctions.enterReferrerPhoneNumber('8105222603');

    loanApplicationPageFunctions.enterBorrowerEmail('vineetbhat00@gmail.com')
    loanApplicationPageFunctions.enterReferrerEmail('vineetbhat00@gmail.com')

    loanApplicationPageFunctions.checkBorrowerDocumentCheckboxForAadhar();
    loanApplicationPageFunctions.checkReferrerDocumentCheckboxForAadhar();
    loanApplicationPageFunctions.uploadBorrowerAadharFrontImage();

    loanApplicationPageFunctions.uploadBorrowAadharBackImage();
    loanApplicationPageFunctions.clickBorrowerDocUploadButton();

    loanApplicationPageFunctions.uploadReferrerAadharFrontImage();
    loanApplicationPageFunctions.uploadReferrerAadharBackImage();
    loanApplicationPageFunctions.clickReferrerDocUploadButton();

    loanApplicationPageFunctions.clickSaveNowButton();
    loanApplicationPageFunctions.clickSubmitButton();

    loanApplicationPageFunctions.enterComment('query draft to submitted');
    loanApplicationPageFunctions.clickSaveStateButton();
  });
})