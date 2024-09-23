class OtpObjects {
    get otpField1() {
        return  cy.get('[aria-label="Please enter OTP character 1"]')
    }

    get otpField2() {
        return  cy.get('[aria-label="Please enter OTP character 2"]')   
    }
    get otpField3() {   
        return  cy.get('[aria-label="Please enter OTP character 3"]')
    }

    get otpField4() {         
        return  cy.get('[aria-label="Please enter OTP character 4"]')
    }
    
    get verifyOtpButton() {
        return cy.get('.justify-between > .items-center')
    }
    
}
export default new OtpObjects();