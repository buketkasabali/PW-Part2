const { test, expect } = require('../fixtures/testfixtures');

test.describe('Visual Comparison - Product Grid', () => {

  test('STANDARD USER - baseline', async ({ loggedInPage }) => {
    await expect(loggedInPage.locator('.inventory_list'))
      .toHaveScreenshot('product-grid.png', {
        animations: 'disabled',
        // With tolerances
        maxDiffPixelRatio: 0.05,
        threshold: 0.2
      });
  });

  test('VISUAL USER - should match standard', async ({ visualUserPage }) => {
    await expect(visualUserPage.locator('.inventory_list'))
      .toHaveScreenshot('product-grid.png', {
        animations: 'disabled',
         // With tolerances
        maxDiffPixelRatio: 0.05,
        threshold: 0.2
      });
  });

});
