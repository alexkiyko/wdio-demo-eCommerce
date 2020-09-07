import HomePage from '../../pageObjects/Home.page';
import ProductsPage from '../../pageObjects/Products.page';

describe('', function () {
  it('should ', function () {
    HomePage.open();
    browser.pause(2000);

    HomePage.menuWomenBtn.click();
    browser.pause(3000);

    ProductsPage.viewList.scrollIntoView();
    ProductsPage.viewList.click();
    browser.pause(2000);

    // ProductsPage.addToCartBtn.scrollIntoView();
    ProductsPage.addToCartBtn[1].click();
    browser.pause(10000);
  });
});
