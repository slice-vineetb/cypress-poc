import assertions from "../../../support/Assertions";
import otpObjects from "./OtpObjects";

class OtpFunctions {

    enterOtp() {
        otpObjects.otpField1.type('1')
        otpObjects.otpField2.type('2')
        otpObjects.otpField3.type('3')
        otpObjects.otpField4.type('4')
    }


    clickVerifyOtpButton() {
        otpObjects.verifyOtpButton.click()
    }
}
export default new OtpFunctions();