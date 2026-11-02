export default class BasePage {
  async waitForElement(element: WebdriverIO.Element, timeout = 10000): Promise<void> {
    await element.waitForDisplayed({ timeout });
  }

  async tap(element: WebdriverIO.Element): Promise<void> {
    await element.waitForDisplayed();
    await element.click();
  }

  async setValue(element: WebdriverIO.Element, value: string): Promise<void> {
    await element.waitForDisplayed();
    await element.setValue(value);
  }
}
