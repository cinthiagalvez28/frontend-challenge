import { Selector } from 'testcafe'
import { t } from 'testcafe'

class checkoutCompletePage {
  constructor() {
    this.pageTitle= Selector('.subheader').withExactText('Finish')
    this.thankYouForYourOrderMessage= Selector('.complete-header').withExactText('THANK YOU FOR YOUR ORDER')
  }
}

export default new checkoutCompletePage()
