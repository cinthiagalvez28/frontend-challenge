import { Role } from 'testcafe'
import loginPage from '../pages/loginPage'
import { CREDENTIALS,PAGE } from '../data/constants.js'

export const standardUser = Role(PAGE.URL, async t => {
  await loginPage.submitLoginForm(CREDENTIALS.VALID_USER.USER, CREDENTIALS.VALID_USER.PASSWORD)
}, {
  preserveUrl: true
})
