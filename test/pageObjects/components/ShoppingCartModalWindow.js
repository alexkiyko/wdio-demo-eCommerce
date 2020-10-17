import Utils from '../../helpers/utils';

class ShoppingCartModalWindow {
  get cartModalWindow() {
    return $('//div[@id="layer_cart"]');
  }

  get continueShoppingBtn() {
    return $('//span[contains(@class, "continue")]');
  }

  get ProceedToCheckoutBtn() {
    return $('//a[@title="Proceed to checkout"]')
  }

  get productAddedText() {
    return $('//div[contains(@class, "layer_cart_product")]//h2');
  }

  get productsCount() {
    return $('//div[contains(@class, "layer_cart_cart")]//h2');
  }

  get productNameText() {
    return $('//span[@id="layer_cart_product_title"]');
  }

  get closeWindowBtn() {
    return $('//span[@title="Close window"]');
  }
}

export default new ShoppingCartModalWindow();
