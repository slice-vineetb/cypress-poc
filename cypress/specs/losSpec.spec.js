describe('template spec', () => {

  before('set localstorage key and value', ()=>{
    cy.window().then((window) => {
      window.localStorage.setItem('BANKOS_SVC', 'http://localhost:8103');
    });
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('losSpec.spec.js', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:8104');
    cy.get('.lg\\:p-8 > .mx-auto > .gap-6 > .gap-2 > .grid > .p-4 > :nth-child(1) > .relative > .text-sm').type('bo-user-1');
    cy.get('.lg\\:p-8 > .mx-auto > .gap-6 > .gap-2 > .grid > .p-4 > :nth-child(2) > .relative > .text-sm').type('12345');
    cy.get('.lg\\:p-8 > .mx-auto > .gap-6 > .gap-2 > .grid > .p-4 > .justify-center').click();
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[aria-label="Please enter OTP character 1"]').click();
    cy.get('[aria-label="Please enter OTP character 2"]').click();
    cy.get('[aria-label="Please enter OTP character 3"]').click();
    cy.get('[aria-label="Please enter OTP character 4"]').clear('4');
    cy.get('[aria-label="Please enter OTP character 4"]').type('4');
    cy.get('.justify-between > .items-center').click();
    cy.get('.box-border > :nth-child(2) > .block').should('be.visible');
    cy.get('.inline-flex > .w-6').click();
    cy.get('#applicantName').clear('v');
    cy.get('#applicantName').type('vineet');
    cy.get('#react-select-3-placeholder > .m-0').click();
    cy.get('#react-select-3-option-0').click();
    cy.get('#amount').clear('6');
    cy.get('#amount').type('6000');
    cy.get('.justify-end > .inline-flex').click();
    cy.get('.justify-start > .justify-between > .text-xl').should('have.text', 'vineet');
    cy.get('.mb-2 > .inline-flex').click();
    cy.get('#fullName').clear('vinee');
    cy.get('#fullName').type('vineet mahesh bhat');
    cy.get('#cbFullName').clear('v');
    cy.get('#cbFullName').type('vineet mahesh bhat');
    cy.get('#dateOfBirth').click();
    cy.get('#dateOfBirth').clear('0002-01-09');
    cy.get('#dateOfBirth').type('2001-01-09');
    cy.get('#cbDateOfBirth').clear('0002-01-09');
    cy.get('#cbDateOfBirth').type('2001-01-09');
    cy.get('#pan').type('EOFPB6850E');
    cy.get(':nth-child(1) > :nth-child(4) > :nth-child(1) > .flex.items-center > .self-center > .inline-flex').click();
    cy.get('#cbPan').type('EOFPB6850E');
    cy.get(':nth-child(2) > :nth-child(4) > :nth-child(1) > .flex.items-center > .self-center > .inline-flex').click()
    cy.get('#phoneNumber').type('8105222603');
    cy.get('#cbPhoneNumber').type('8105222603');
    cy.get('#email').type('vineetbhat00@gmail.com');
    cy.get('.grid > :nth-child(2)').click();
    cy.get('#cbEmail').type('vineetbhat00@gmail.com');
    cy.get('#BORROWER-undefined-AADHAAR').check();
    cy.get('#REFERRER-undefined-AADHAAR').check();
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[for="file-upload-AADHAARFRONTBORROWER"] > .flex > .mt-2').click();
    cy.get('[for="file-upload-AADHAARFRONTBORROWER"] > .flex > .mt-2')
    cy.get('#file-upload-AADHAARFRONTBORROWER').selectFile('/Users/vineetbhat/Desktop/cyp-poc/cypress/fixtures/docs/front.png',{ force: true })
    cy.wait(2000);
    cy.get(':nth-child(1) > :nth-child(7) > .gap-4.lg\\:flex-row > .gap-4 > :nth-child(1) > div.w-full > .gap-2 > .flex-row > label.relative > .flex > .w-8').click();
    cy.get('#file-upload-AADHAARBACKBORROWER').selectFile('/Users/vineetbhat/Desktop/cyp-poc/cypress/fixtures/docs/back.png',{ force: true })
    cy.wait(2000);
    cy.get(':nth-child(1) > :nth-child(7) > .gap-4.lg\\:flex-row > :nth-child(2) > .self-center > .inline-flex > .items-center').click();
    cy.get('[for="file-upload-AADHAARFRONTREFERRER"] > .flex').click();
    cy.get('#file-upload-AADHAARFRONTREFERRER').selectFile('/Users/vineetbhat/Desktop/cyp-poc/cypress/fixtures/docs/front.png',{ force: true })
    cy.get('label.relative > .flex').click();
    cy.get('#file-upload-AADHAARBACKREFERRER').selectFile('/Users/vineetbhat/Desktop/cyp-poc/cypress/fixtures/docs/back.png',{ force: true })
    cy.get(':nth-child(2) > :nth-child(7) > .gap-4.lg\\:flex-row > :nth-child(2) > .self-center > .inline-flex > .items-center').click();
    cy.get('.mb-2 > .flex > .text-white').click();
    cy.get('.gap-x-1 > .flex > :nth-child(2)').click();
    cy.get('.focus\\:border-indigo-500 > .relative > .block').click();
    cy.get('.justify-end > .ml-2').click();
    /* ==== End Cypress Studio ==== */
  });
})