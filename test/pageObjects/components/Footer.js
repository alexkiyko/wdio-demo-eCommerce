import Utils from './../../helpers/utils';

class Footer {
  get newsletterEmailInput() {
    return $('//input[@id="newsletter-input"]');
  }

  get submitEmailBtn() {
    return $('//button[@name="submitNewsletter"]');
  }

  newsletterSubscription(email) {
    Utils.setValue(this.newsletterEmailInput, email);
    Utils.click(this.submitEmailBtn);
  }
}

export default new Footer();
