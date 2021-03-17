import { Selector } from 'testcafe'
import { t } from 'testcafe'
import { USER_INFO } from '../data/constants.js'

class checkoutYourInformationPage {
  constructor() {
    this.pageTitle = Selector('.subheader').withExactText('Checkout: Your Information')
    this.firstNameInput= Selector('#first-name')
    this.lastNameInput= Selector('#last-name')
    this.postalCodeInput= Selector('#postal-code')
    this.continueButton= Selector('.cart_button').withAttribute('value','CONTINUE')
    this.cancelButton= Selector('.cart_cancel_link')
    this.errorMessage=Selector('.checkout_info_wrapper h3').withExactText('Error: First Name is required')
  }

  async userFillsTheirInformation(){
    await t
    .typeText(this.firstNameInput, USER_INFO.FIRST_NAME)
    .typeText(this.lastNameInput, USER_INFO.LAST_NAME)
    .typeText(this.postalCodeInput, USER_INFO.POSTAL_CODE)
    .click(this.continueButton)
  }
}

export default new checkoutYourInformationPage()
