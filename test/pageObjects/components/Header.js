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

  get menuWomenBtn() {
    return $('//a[@title="Women"]');
  }
}

export default new Header();
