import BasePage from "./Base.page";

class HomePage extends BasePage {
  get newsletterSubscriptionAlert() {
    return $('//p[contains(@class, "alert")]');
  }

  open() {
    super.open('/');
  }
}

export default new HomePage();
