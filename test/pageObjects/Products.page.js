class ProductsPage {
  get viewList() { return $('//li[@id="list"]'); }
  get viewGrid() { return $('//li[@id="grid"]'); }
  get addToCartBtn() { return $$('//a[@title="Add to cart"]'); }

}

export default new ProductsPage();
