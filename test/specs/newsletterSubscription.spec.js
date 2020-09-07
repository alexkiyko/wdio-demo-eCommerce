import { expect } from 'chai';
import HomePage from "./../pageObjects/Home.page";
import Footer from '../pageObjects/components/Footer';

describe('', function () {
  before('', function () {
    HomePage.open();
  });

  it('should subscribe', function () {
    Footer.newsletterSubscription('teswt@gmail.com');
    browser.pause(2000);
    expect(HomePage.newsletterSubscriptionAlert.getText()).eq(' Newsletter : You have successfully subscribed to this newsletter.')
  });
});
