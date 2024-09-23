class LoanApplicationPageObjects {
    get applicantTitle() {
      return '.justify-start > .justify-between > .text-xl';
    }

    get editDetailsButton() {
      return '.mb-2 > .inline-flex';
    }

    get referrerFullNameField() {
      return '#cbFullName';
    }

    get borrowerBirthdateField() {
      return '#dateOfBirth';
    }

    get referrerBirthdateField() {
      return '#cbDateOfBirth';
    }

    get borrowerPanField() {
      return '#pan';
    }

    get referrerPanField() {
      return '#cbPan';
    }

    get borrowerPanVerifyButton() {
      return ':nth-child(1) > :nth-child(4) > :nth-child(1) > .flex.items-center > .self-center > .inline-flex'
    }

    get referrePanVerifyButton() {
      return ':nth-child(2) > :nth-child(4) > :nth-child(1) > .flex.items-center > .self-center > .inline-flex'
    }

    get borrowerPhoneNumberField() {
      return '#phoneNumber';
    }

    get referrerPhoneNumberField() {
      return '#cbPhoneNumber';
    }

    get borrowerEmailField() {
      return '#email';
    }

    get referrerEmailField() {
      return '#cbEmail';
    }

    get borrowerDocumentCheckboxForAadhar() {
      return '#BORROWER-undefined-AADHAAR';
    }

    get referrerDocumentCheckboxForAadhar() {
      return '#REFERRER-undefined-AADHAAR';
    }

    get borrowerAadharFronUploadSelector() {     
      return '#file-upload-AADHAARFRONTBORROWER';
    }

    get borrowerAadharBackUploadSelector() {
      return '#file-upload-AADHAARBACKBORROWER';
    }

    get borrowerDocUploadButton() {
      return ":nth-child(1) > :nth-child(7) > .gap-4 > :nth-child(2) > .self-center > .inline-flex"
    }

    get referrerDocUploadButton() {
      return ':nth-child(2) > :nth-child(7) > .gap-4 > :nth-child(2) > .self-center > .inline-flex'
    }

    get referrerAadharFronUploadSelector() {
      return '#file-upload-AADHAARFRONTREFERRER';
    }

    get referrerAadharBackUploadSelector() {
      return '#file-upload-AADHAARBACKREFERRER';
    }

    get saveNowButton() {
      return '.mb-2 > .flex > .text-white';
    }

    get submitButton() {
      return '.gap-x-1 > .flex > :nth-child(2)';
    }

    get saveStateButton() {
      return '.justify-end > .ml-2';
    }

    get commentPlaceholder() {
      return '.focus\\:border-indigo-500 > .relative > .block';
    }

  }
  export default new LoanApplicationPageObjects();