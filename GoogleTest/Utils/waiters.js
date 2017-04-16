module.exports = class Wait {
  static untilAppear(waitForElement,timeout = 5000, message) {
    browser.wait(protractor.ExpectedConditions.visibilityOf(waitForElement), timeout, message);
  }
}
