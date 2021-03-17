import { Selector } from 'testcafe'
import { t } from 'testcafe'

class inventoryPage {
  constructor() {
    this.pageTitle= Selector('.product_label')
    this.menuButton= Selector('#react-burger-menu-btn')
    this.logOutLink= Selector('#logout_sidebar_link')
    this.shoppingCartLink= Selector('.shopping_cart_link')

    //Products
    this.addProduct= Selector('button').withExactText('ADD TO CART').nth(0)
    this.productName = Selector('.inventory_item_name').nth(0)
    this.addSecondProduct= Selector('button').withExactText('ADD TO CART').nth(1)
    this.addThirdProduct= Selector('button').withExactText('ADD TO CART').nth(2)

  }

  async addSingleProduct(){
    await t
      .click(this.addProduct)
      .click(this.shoppingCartLink)
  }
}

export default new inventoryPage()
