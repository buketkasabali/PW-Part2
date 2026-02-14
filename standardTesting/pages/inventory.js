const { expect } = require('@playwright/test');

class ItemsPage {
  constructor(page) {
    this.page = page;
    this.sortDropdown = page.locator('.product_sort_container');
    this.inventoryItems = page.locator('.inventory_item');
    this.cartIcon = page.locator('.shopping_cart_link');
  }

  async sortByPriceHighToLow() {
    await this.page.waitForLoadState('networkidle');
    await this.sortDropdown.waitFor({ state: 'visible', timeout: 15000 });
    const options = await this.sortDropdown.locator('option').allTextContents();
    if (!options.includes('Price (high to low)')) {
      throw new Error(`Expected option not found in dropdown: ${options.join(', ')}`);
    }
    await this.sortDropdown.selectOption({ label: 'Price (high to low)' });
    await this.page.waitForLoadState('networkidle');
  }
  

  async getItems() {
    const items = [];
    const count = await this.inventoryItems.count();

    for (let i = 0; i < count; i++) {
      const item = this.inventoryItems.nth(i);
      const name = await item.locator('.inventory_item_name').innerText();
      const priceText = await item.locator('.inventory_item_price').innerText();
      const price = parseFloat(priceText.replace('$', ''));
      items.push({ name, price });
    }

    return items;
  }

  async getMostExpensiveItem() {
    const items = await this.getItems();
    if (items.length === 0) throw new Error('No items found on the page');
    return items.reduce((max, item) => (item.price > max.price ? item : max));
  }

  async addItemToCart(itemName) {
    const item = this.inventoryItems.filter({
      has: this.page.locator('.inventory_item_name', { hasText: itemName }),
    });
    const addButton = item.getByRole('button', { name: 'Add to cart' });
    if (!(await addButton.isVisible())) {
      throw new Error(`Add to cart button not found for item: ${itemName}`);
    }
    await addButton.click();
  }

  async addMostExpensiveItemToCart() {
    const expensiveItem = await this.getMostExpensiveItem();
    await this.addItemToCart(expensiveItem.name);
    return expensiveItem;
  }

  async goToCart() {
    await this.cartIcon.click();
  }

    async addMostExpensiveItemAndGoToCart() {
    await this.sortByPriceHighToLow();
    const item = await this.getMostExpensiveItem();
    await this.addItemToCart(item.name);
    await this.goToCart();
    return item;
  }
}


module.exports = ItemsPage;
