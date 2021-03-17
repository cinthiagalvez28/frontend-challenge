import { Selector } from 'testcafe'
import { t } from 'testcafe'

class checkoutOverviewPage {
  constructor() {
    this.pageTitle= Selector('.subheader').withExactText('Checkout: Overview')
    this.productName = Selector('.inventory_item_name').nth(0)
    this.finishButton = Selector('.cart_button')
  }
}

export default new checkoutOverviewPage()
