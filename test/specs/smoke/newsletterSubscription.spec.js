import { expect } from 'chai';
import HomePage from "../../pageObjects/Home.page";
import Footer from '../../pageObjects/components/Footer';
import homePageData from './../../data/homePage.data';

describe('', function () {
  before('', function () {
    HomePage.open();
  });

  it('success', function () {
    Footer.newsletterSubscription('one4@gmail.com');

    browser.waitUntil(
      () => HomePage.newsletterSubscriptionAlert.getText() === homePageData.newsletterSubscriptionAlert.success,
      {
        timeout: 2000
    });

    expect(HomePage.newsletterSubscriptionAlert.getText()).eq(
      homePageData.newsletterSubscriptionAlert.success)
  });

  it('error already reg', function () {
    Footer.newsletterSubscription('one4@gmail.com');

    browser.waitUntil(
      () => HomePage.newsletterSubscriptionAlert.getText() === homePageData.newsletterSubscriptionAlert.error["already registered"],
      {
        timeout: 2000
      });

    expect(HomePage.newsletterSubscriptionAlert.getText()).eq(
      homePageData.newsletterSubscriptionAlert.error["already registered"])
  });

  it('invalid emal', function () {
    Footer.newsletterSubscription('one1222');

    browser.waitUntil(
      () => HomePage.newsletterSubscriptionAlert.getText() === homePageData.newsletterSubscriptionAlert.error["invalid email"],
      {
        timeout: 2000
      });

    expect(HomePage.newsletterSubscriptionAlert.getText()).eq(
      homePageData.newsletterSubscriptionAlert.error["invalid email"])
  });
});
