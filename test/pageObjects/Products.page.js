import Utils from '../helpers/utils';

class ProductsPage {
  get viewListBtn() {
    return $('//li[@id="list"]');
  }

  get viewGridBtn() {
    return $('//li[@id="grid"]');
  }

  get title() {
    return $('//span[@class="cat-name"]');
  }

  addToCartBtn(index) {
    return $$('//a[@title="Add to cart"]')[index];
  }

  moreBtn(index) {
    return $$('//a[@title="View"]')[index];
  }

  addToWishListBtn(index) {
    return $$('//div[@class="wishlist"]')[index];
  }

  addToCompare(index) {
    return $$('//div[@class="compare"]')[index];
  }

  productName(index) {
    return $$('//h5[@itemprop="name"]')[index];
  }

  viewProductsList() {
    Utils.click(this.viewListBtn);
  }
}

export default new ProductsPage();
