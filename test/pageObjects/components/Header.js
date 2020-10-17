import Utils from '../../helpers/utils';

class Header {
  get siteLogo() {
    return $('//div[@id="header_logo"]');
  }

  get contactUsBtn() {
    return $('//div[@id="contact-link"]');
  }

  get signIn() {
    return $('//a[@class="login"]');
  }

  get menuWomenProductsBtn() {
    return $('//a[@title="Women"]');
  }

  goToWomenProducts() {
    Utils.click(this.menuWomenProductsBtn);
  }
}

export default new Header();
