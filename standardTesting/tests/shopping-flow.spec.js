/*const { test, expect } = require('@playwright/test');
const ItemsPage = require('../pages/inventory.js');

test('user can add the most expensive product to cart', async ({ page }) => {
  const itemsPage = new ItemsPage(page);

  // En pahalı ürüne göre sırala
  await itemsPage.sortByPriceHighToLow();

  // En pahalı ürünü al
  const mostExpensiveItem = await itemsPage.getMostExpensiveItem();

  // Sepete ekle
  await itemsPage.addItemToCart(mostExpensiveItem.name);

  // Sepete git
  await itemsPage.goToCart();

  // Sepette görünürlüğünü inventory locator ile doğrula
  const cartItemLocator = page.locator('.inventory_item_name', {
    hasText: mostExpensiveItem.name,
  });
  await expect(cartItemLocator).toBeVisible();
});
*/
const { test, expect } = require('../fixtures/testfixtures');
const ItemsPage = require('../pages/inventory.js');

test('user can add the most expensive product to cart', async ({ loggedInPage }) => {
  const itemsPage = new ItemsPage(loggedInPage);

  await itemsPage.sortByPriceHighToLow();

  const mostExpensiveItem = await itemsPage.getMostExpensiveItem();

  await itemsPage.addItemToCart(mostExpensiveItem.name);

  await itemsPage.goToCart();

  const cartItemLocator = loggedInPage.locator('.inventory_item_name', {
    hasText: mostExpensiveItem.name,
  });
  await expect(cartItemLocator).toBeVisible();
});
