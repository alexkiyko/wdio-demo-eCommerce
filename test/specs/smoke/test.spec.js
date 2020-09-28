import HomePage from '../../pageObjects/Home.page';
import ProductsPage from '../../pageObjects/Products.page';
import ShoppingCartModalWindow from "../../pageObjects/components/ShoppingCartModalWindow";

describe('', function () {
  it('should ', function () {
    browser.maximizeWindow();
    HomePage.open();
    browser.pause(2000);

    // HomePage.menuWomenBtn.click();
    $('//div[@id="block_top_menu"]/ul/li[3]').click();
    browser.pause(2000);

    ProductsPage.viewListBtn.scrollIntoView();
    ProductsPage.viewListBtn.click();
    browser.pause(2000);

    // ProductsPage.addToCartBtn.scrollIntoView();
    ProductsPage.addToCartBtn(0).click();
    browser.pause(2000);

    console.log(ShoppingCartModalWindow.productAddedText.getText());
    console.log(ShoppingCartModalWindow.productsCount.getText());
    console.log($('//h5[@itemprop="name"]').getText());

  });
});
