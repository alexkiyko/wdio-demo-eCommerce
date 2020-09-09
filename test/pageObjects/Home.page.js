import BasePage from "./Base.page";

class HomePage extends BasePage {
  get newsletterSubscriptionAlert() {
    return $('//p[contains(@class, "alert")]');
  }

  open() {
    super.open('http://automationpractice.com/');
  }
}

export default new HomePage();
