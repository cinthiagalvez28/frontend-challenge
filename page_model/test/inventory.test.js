import { Role } from 'testcafe'
import { standardUser } from '../data/roles.js'
import loginPage from '../pages/loginPage'
import inventoryPage from '../pages/inventoryPage'
import cartPage from '../pages/cartPage'

fixture('Inventory feature testing')
  .beforeEach(async t => {
    await t
      .useRole(standardUser)
  })

test('User can logout from product\'s page', async t => {
  await t
    .click(inventoryPage.menuButton)
    .click(inventoryPage.logOutLink)
    .expect(loginPage.loginButton.exists).ok()
})

test('User can navigate to the shopping cart page', async t => {
  await t
    .click(inventoryPage.shoppingCartLink)
    .expect(cartPage.pageTitle.exists).ok()
})

test('User can add a single product to the shopping cart', async t => {
  await inventoryPage.addSingleProduct()
  await t.expect(cartPage.productList.count).eql(1)

})

test('User can add multiple products to the shopping cart', async t => {
  await t
    .click(inventoryPage.addProduct)
    .click(inventoryPage.addSecondProduct)
    .click(inventoryPage.addThirdProduct)
    .click(inventoryPage.shoppingCartLink)
    .expect(cartPage.productList.count).eql(3)

})
