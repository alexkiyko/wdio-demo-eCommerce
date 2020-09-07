import BasePage from "./Base.page";

class HomePage extends BasePage {
  open() {
    super.open('http://automationpractice.com/');
  }

  get siteLogo() { return $('//div[@id="header_logo"]'); }
  get contactUsBtn() { return $('//div[@id="contact-link"]'); }
  get signIn() { return $('//a[@class="login"]'); }
  get menuWomenBtn() { return $('//a[@title="Women"]'); }

  get newsletterSubscriptionAlert() { return $('//p[contains(@class, "alert")]'); }



}

export default new HomePage();
