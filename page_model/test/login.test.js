import { Role } from 'testcafe'
import { standardUser } from '../data/roles.js'
import loginPage from '../pages/loginPage'
import inventoryPage from '../pages/inventoryPage'
import { CREDENTIALS,PAGE } from '../data/constants.js'

fixture('Login feature testing')
  .page(PAGE.URL)

test('User can login using valid credentials', async t => {
  await t
    .useRole(standardUser)
    .expect(inventoryPage.pageTitle.exists).ok()
})

test('User can not login using invalid credentials', async t => {
  await loginPage.submitLoginForm(CREDENTIALS.INVALID_USER.USER, CREDENTIALS.INVALID_USER.PASSWORD)
  await t.expect(loginPage.errorMessage.exists).ok()
})
