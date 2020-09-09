import { expect } from 'chai';
import HomePage from "../../pageObjects/Home.page";
import Footer from '../../pageObjects/components/Footer';
import Utils from './../../helpers/utils';
import homePageData from './../../data/homePage.data';

describe('Newsletter Subscription Functionality', function () {
  before('Open Home Page', function () {
    HomePage.open();
  });

  it('Verify subscription success (unregistered email)', function () {
    Footer.newsletterSubscription('one1sdd1fhg34@gmail.com');
    expect(() => Utils.waitForExpectedText(
      HomePage.newsletterSubscriptionAlert, homePageData.newsletterSubscriptionAlert.success))
      .to.not.throw();
  });

  it('Verify error displayed (registered email)', function () {
    Footer.newsletterSubscription('one6@gmail.com');
    expect(() => Utils.waitForExpectedText(
      HomePage.newsletterSubscriptionAlert, homePageData.newsletterSubscriptionAlert.error.registeredEmail))
      .to.not.throw();
  });

  it('Verify error displayed (invalid email)', function () {
    Footer.newsletterSubscription('onh2');
    expect(() => Utils.waitForExpectedText(
      HomePage.newsletterSubscriptionAlert, homePageData.newsletterSubscriptionAlert.error.invalidEmail))
      .to.not.throw();
  });
});
