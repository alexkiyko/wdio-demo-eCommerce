class Utils {
  addValue(element, value) {
    this.waitForDisplayed(element);
    this.tryAction(() => element.addValue(value),
      `Failed to add value: '${value}' to '${element.selector}'`);
  }

  clearValue(element) {
    this.waitForDisplayed(element);
    this.tryAction(() => element.clearValue(),
      `Failed to clear value in '${element.selector}'`);
  }

  setValue(element, value) {
    this.waitForDisplayed(element);
    this.tryAction(() => element.setValue(value),
      `Failed to set value: '${value}' to '${element.selector}'`);
  }

  getText(element) {
    this.waitForDisplayed(element);
    return this.tryAction(() => element.getText(), `Failed to get text from element '${element.selector}'`);
  }

  click(element) {
    this.waitForEnabled(element);
    this.tryAction(() => element.click(),
      `Failed to click on '${element.selector}'`);
  }

  isEnabled(element) {
    return element.isEnabled();
  }

  waitForExpectedText(element, expectedText) {
    this.waitForDisplayed(element);
    browser.waitUntil(() => element.getText() === expectedText,
  {
    timeout: 5000,
    timeoutMsg: `Element didn't match expected text '${element.selector}'`
    });
  }

  waitForEnabled(element) {
    this.waitForDisplayed(element);
    element.waitForEnabled({
      timeout: 5000,
      timeoutMsg: `Element not enabled '${element.selector}'`,
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
      timeoutMsg: `Element not visible - '${element.selector}'`,
    });
  }

  isExist(element) {
    element.waitForExist({
      timeout: 5000,
      timeoutMsg: `Element not exist '${element.selector}'`,
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
