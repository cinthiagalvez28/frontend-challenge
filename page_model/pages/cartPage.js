import { Selector } from 'testcafe'
import { t } from 'testcafe'

class cartPage {
  constructor() {
    this.pageTitle = Selector('.subheader').withExactText('Your Cart')
    this.productList= Selector('.cart_item')
    this.continueShoppingButton= Selector('.btn_secondary').withExactText('CONTINUE SHOPPING')
    this.checkoutButton= Selector('.checkout_button').withExactText('CHECKOUT')
  }
}

export default new cartPage()
