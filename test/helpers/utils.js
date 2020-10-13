import { assert } from 'chai';

class Utils {
  addValue(element, value) {
    this.waitForDisplayed(element);
    this.tryAction(() => element.addValue(value),
      `Failed to add value: ${value} to selector: ${element.selector}`);
  }

  clearValue(element) {
    this.waitForDisplayed(element);
    this.tryAction(() => element.clearValue(),
      `Failed to clear value in selector: ${element.selector}`);
  }

  setValue(element, value) {
    this.waitForDisplayed(element);
    this.tryAction(() => element.setValue(value),
      `Failed to set value: '${value}' to selector: ${element.selector}`);
  }

  getText(element) {
    this.waitForDisplayed(element);
    return this.tryAction(() => element.getText(), `Failed to get text from element, \n ` +
      `selector: ${element.selector}`);
  }

  click(element) {
    this.waitForEnabled(element);
    this.tryAction(() => element.click(),
      `Failed to click on element, selector: ${element.selector}`);
  }

  isEnabled(element) {
    return element.isEnabled();
  }

  waitForExpectedText(element, expectedText) {
    this.waitForDisplayed(element);
    browser.waitUntil(() => element.getText() === expectedText,
  {
    timeout: 5000,
    timeoutMsg: `Element didn't match Expected Text: ${expectedText} !== Actual Text: ${element.getText()} \n ` +
      `selector: ${element.selector}`
    });
  }

  waitForEnabled(element) {
    this.waitForDisplayed(element);
    element.waitForEnabled({
      timeout: 5000,
      timeoutMsg: `Element not enabled, selector: ${element.selector}`,
    });
  }

  isDisplayed(element) {
    this.waitForDisplayed(element);
    return element.isDisplayed();
  }

  waitForDisplayed(element) {
    this.isExist(element);
    element.waitForDisplayed({
      timeout: 5000,
      timeoutMsg: `Element not visible, selector: ${element.selector}`,
    });
  }

  isExist(element) {
    element.waitForExist({
      timeout: 5000,
      timeoutMsg: `Element not exist, selector: ${element.selector}`,
    });
  }

  handleError(customErrorMessage, error) {
    assert.fail(`${customErrorMessage} ${error}`);
  }

  tryAction(action, errorMessage) {
    try {
      return action();
    } catch (e) {
      this.handleError(errorMessage, e);
    }
  }
}

export default new Utils();
