class ProductsPage {
  get viewListBtn() {
    return $('//li[@id="list"]');
  }

  get viewGridBtn() {
    return $('//li[@id="grid"]');
  }

  get addToCartBtn() {
    return $$('//a[@title="Add to cart"]');
  }

}

export default new ProductsPage();
