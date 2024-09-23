import loanApplicationPageObjects from "./LoanApplicationPageObjects";
import assertions from "../../../support/Assertions";

class LoanApplicationPageFunctions {
    validateLoanApplicationPage() {
        assertions.expectTextToMatch(loanApplicationPageObjects.applicantTitle,'vineet mahesh bhat')
    }

    clickEditDetailsButton(){
        cy.get(loanApplicationPageObjects.editDetailsButton).click();
    }

    enterReferrerFullName(referrerFullName){
        cy.typeText(loanApplicationPageObjects.referrerFullNameField, referrerFullName);
    }

    enterBorrowerBirthdate(birthdate){
        cy.typeText(loanApplicationPageObjects.borrowerBirthdateField, birthdate);
    }

    enterReferrerBirthdate(referrerBirthdate){
        cy.typeText(loanApplicationPageObjects.referrerBirthdateField, referrerBirthdate);
    }

    enterBorrowerPan(pan){
        cy.typeText(loanApplicationPageObjects.borrowerPanField, pan);
        cy.waitForElementToBeLoaded(loanApplicationPageObjects.borrowerPanVerifyButton);
    }

    clickBorrowerPanVerifyButton(){
        cy.get(loanApplicationPageObjects.borrowerPanVerifyButton).click();
    }

    clickReferrerPanVerifyButton(){
        cy.get(loanApplicationPageObjects.referrePanVerifyButton).click();
    }

    enterReferrerPan(pan){
        cy.typeText(loanApplicationPageObjects.referrerPanField, pan);
        cy.waitForElementToBeLoaded(loanApplicationPageObjects.referrePanVerifyButton);
    }

    enterBorrowerPhoneNumber(phoneNumber){
        cy.typeText(loanApplicationPageObjects.borrowerPhoneNumberField, phoneNumber);
    }

    enterReferrerPhoneNumber(phoneNumber){
        cy.typeText(loanApplicationPageObjects.referrerPhoneNumberField, phoneNumber);
    }

    enterBorrowerEmail(email){ 
        cy.typeText(loanApplicationPageObjects.borrowerEmailField, email);
    }

    enterReferrerEmail(email){
        cy.typeText(loanApplicationPageObjects.referrerEmailField, email);
    }

    checkBorrowerDocumentCheckboxForAadhar(){
        cy.checkCheckbox(loanApplicationPageObjects.borrowerDocumentCheckboxForAadhar);
    }
    
    checkReferrerDocumentCheckboxForAadhar(){
        cy.checkCheckbox(loanApplicationPageObjects.referrerDocumentCheckboxForAadhar);
    }

    uploadBorrowerAadharFrontImage(){
        cy.uploadFile(loanApplicationPageObjects.borrowerAadharFronUploadSelector,'/Users/vineetbhat/Desktop/cyp-poc/cypress/fixtures/docs/front.png');
        cy.wait(2000);
    }

    uploadBorrowAadharBackImage(){
        cy.uploadFile(loanApplicationPageObjects.borrowerAadharBackUploadSelector,'/Users/vineetbhat/Desktop/cyp-poc/cypress/fixtures/docs/back.png');
        cy.wait(2000);
    }

    uploadReferrerAadharFrontImage(){
        cy.uploadFile(loanApplicationPageObjects.referrerAadharFronUploadSelector,'/Users/vineetbhat/Desktop/cyp-poc/cypress/fixtures/docs/front.png');
        cy.wait(2000);
    }

    uploadReferrerAadharBackImage(){
        cy.uploadFile(loanApplicationPageObjects.referrerAadharBackUploadSelector,'/Users/vineetbhat/Desktop/cyp-poc/cypress/fixtures/docs/back.png');
        cy.wait(2000);
    }

    clickBorrowerDocUploadButton() {
        cy.get(loanApplicationPageObjects.borrowerDocUploadButton).click();
        cy.waitForElementToBeLoaded(loanApplicationPageObjects.borrowerDocUploadButton);
    }

    clickReferrerDocUploadButton() {
        cy.get(loanApplicationPageObjects.referrerDocUploadButton).click();
        cy.waitForElementToBeLoaded(loanApplicationPageObjects.referrerDocUploadButton);
    }

    clickSaveNowButton(){
        cy.scrollTillVisible(loanApplicationPageObjects.saveNowButton);
        cy.get(loanApplicationPageObjects.saveNowButton).click();
    }

    clickSubmitButton(){
        cy.get(loanApplicationPageObjects.submitButton).click();
    }

    clickSaveStateButton(){
        cy.get(loanApplicationPageObjects.saveStateButton).click();
    }

    enterComment(comment){
        cy.typeText(loanApplicationPageObjects.commentPlaceholder, comment);
    }


}
export default new LoanApplicationPageFunctions();