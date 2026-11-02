export async function waitForCondition(
  condition: () => Promise<boolean>,
  timeout = 10000,
  interval = 500,
): Promise<void> {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    if (await condition()) return;
    await browser.pause(interval);
  }
  throw new Error('Condition not met within timeout');
}
