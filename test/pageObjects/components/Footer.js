class Footer {
  get newsletterEmailInput() { return $('//input[@id="newsletter-input"]'); }
  get submitEmailBtn() { return $('//button[@name="submitNewsletter"]'); }

  newsletterSubscription(email) {
    this.newsletterEmailInput.setValue(email);
    this.submitEmailBtn.click();
  }
}

export default new Footer();
