describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id("mian_app"))).toBeVisible();
  });

  it('should show hello screen after tap', async () => {
    await expect(element(by.id("intro-text"))).toBeVisible();
    await expect(element(by.id("intro-text"))).toHaveText(
      "Open up App.js to start working on your app!"
    );
  });

  // it('should show world screen after tap', async () => {
  //   await element(by.id('world_button')).tap();
  //   await expect(element(by.text('World!!!'))).toBeVisible();
  // });
});
