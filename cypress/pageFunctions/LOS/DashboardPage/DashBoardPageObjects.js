class DashBoardPageObjects {
  get DashBoardTitle() {
    return '.box-border > :nth-child(2) > .block';
  }

  get newLoanButton() {
    return '.inline-flex > .w-6';
  }

  get applicantNameField() {
    return '#applicantName';
  }

  get loanTypeDropdown() {
    return '#react-select-3-placeholder > .m-0';
  }

  get loanUpto5LOption() {
    return '#react-select-3-option-0';
  }

  get AmountField() {
    return '#amount';
  }
}
export default new DashBoardPageObjects();