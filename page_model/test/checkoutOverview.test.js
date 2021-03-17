import { Role } from 'testcafe'
import { standardUser } from '../data/roles.js'
import loginPage from '../pages/loginPage'
import inventoryPage from '../pages/inventoryPage'
import cartPage from '../pages/cartPage'
import checkoutYourInformationPage from '../pages/checkoutYourInformationPage'
import checkoutOverviewPage from '../pages/checkoutOverviewPage'
import checkoutCompletePage from '../pages/checkoutCompletePage'

fixture('Checkout: Overview feature testing')
  .beforeEach(async t => {
    await t
      .useRole(standardUser)
      .click(inventoryPage.addProduct)
  })

test('Verify items from the overview page match with the added items', async t => {
  let productNameInventory = await inventoryPage.productName.innerText
  await t.click(inventoryPage.shoppingCartLink)
  await t.click(cartPage.checkoutButton)
  await checkoutYourInformationPage.userFillsTheirInformation()
  let productNameCheckout = await checkoutOverviewPage.productName.innerText
  await t.expect(productNameInventory).eql(productNameCheckout)
})

test('User navigates to the confirmation page', async t => {
  await t.click(inventoryPage.shoppingCartLink)
  await t.click(cartPage.checkoutButton)
  await checkoutYourInformationPage.userFillsTheirInformation()
  await t.click(checkoutOverviewPage.finishButton)
  await t.expect(checkoutCompletePage.thankYouForYourOrderMessage.exists).ok()
})
