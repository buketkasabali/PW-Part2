const { test: base, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const ItemsPage = require('../pages/inventory');
const { users } = require('../utils/testData');

const test = base.extend({

  loggedInPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(
      users.standarduser.username,
      users.standarduser.password
    );

    await page.waitForURL('**/inventory.html');
    await page.waitForLoadState('networkidle');

    await use(page);
  },

  visualUserPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(
      users.visualuser.username,
      users.visualuser.password
    );

    await page.waitForURL('**/inventory.html');
    await page.waitForLoadState('networkidle');

    await use(page);
  },

  cartWithItemPage: async ({ loggedInPage }, use) => {
    const itemsPage = new ItemsPage(loggedInPage);
    await itemsPage.addMostExpensiveItemAndGoToCart();
    await use(loggedInPage);
  }

});

module.exports = { test, expect }