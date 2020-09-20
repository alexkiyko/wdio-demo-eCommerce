import { expect } from 'chai';
import HomePage from "../../pageObjects/Home.page";
import Footer from '../../pageObjects/components/Footer';
import Utils from './../../helpers/utils';
import homePageData from './../../data/homePage.data';
import { email } from "../../helpers/testUtils";

describe('Newsletter Subscription Functionality', () => {
  before('Open Home Page', () => {
    HomePage.open();
  });

  it('Verify subscription success (unregistered email)', () => {
    Footer.newsletterSubscription(email.random);
    expect(() => Utils.waitForExpectedText(
      HomePage.newsletterSubscriptionAlert, homePageData.newsletterSubscriptionAlert.success))
      .to.not.throw();
  });

  it('Verify error displayed (registered email)', () => {
    Footer.newsletterSubscription(email.registered);
    expect(() => Utils.waitForExpectedText(
      HomePage.newsletterSubscriptionAlert, homePageData.newsletterSubscriptionAlert.error.registeredEmail))
      .to.not.throw();
  });

  it('Verify error displayed (invalid email)', () => {
    Footer.newsletterSubscription(email.invalid);
    expect(() => Utils.waitForExpectedText(
      HomePage.newsletterSubscriptionAlert, homePageData.newsletterSubscriptionAlert.error.invalidEmail))
      .to.not.throw();
  });
});
