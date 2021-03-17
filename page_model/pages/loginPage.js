import { Selector } from 'testcafe'
import { t } from 'testcafe'

class loginPage {
  constructor() {
    this.usernameField = Selector('#user-name')
    this.passwordField = Selector('#password')
    this.loginButton = Selector('#login-button')
    this.errorMessage = Selector('.login-box h3').withExactText('Epic sadface: Username and password do not match any user in this service')
  }

  async submitLoginForm(user, password){
    await t
      .typeText(this.usernameField, user, {paste:true})
      .typeText(this.passwordField, password, {paste:true})
      .click(this.loginButton)
  }
}

export default new loginPage()
