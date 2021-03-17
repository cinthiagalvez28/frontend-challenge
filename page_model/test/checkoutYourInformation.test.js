import { Role } from 'testcafe'
import { standardUser } from '../data/roles.js'
import loginPage from '../pages/loginPage'
import inventoryPage from '../pages/inventoryPage'
import cartPage from '../pages/cartPage'
import checkoutYourInformationPage from '../pages/checkoutYourInformationPage'
import checkoutOverviewPage from '../pages/checkoutOverviewPage'
import { USER_INFO } from '../data/constants.js'

fixture('Checkout: Your Information feature testing')
  .beforeEach(async t => {
    await t.useRole(standardUser)
    await inventoryPage.addSingleProduct()
    await t.click(cartPage.checkoutButton)
  })

  test('User missing first name information', async t => {
    await t
      .typeText(checkoutYourInformationPage.lastNameInput, USER_INFO.LAST_NAME)
      .typeText(checkoutYourInformationPage.postalCodeInput, USER_INFO.POSTAL_CODE)
      .click(checkoutYourInformationPage.continueButton)
      .expect(checkoutYourInformationPage.errorMessage.exists).ok()
  })

  test('User fills their information', async t => {
    await checkoutYourInformationPage.userFillsTheirInformation()
    await t.expect(checkoutOverviewPage.pageTitle.exists).ok()
  })
