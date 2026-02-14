const { test } = require('../fixtures/testfixtures');
const CheckoutPage = require('../pages/checkout');
const { checkoutInfo } = require('../utils/testData');
test.describe('Checkout Tests', () => {

  test('Standard user can complete checkout successfully',
    async ({ cartWithItemPage }) => {

      const checkoutPage = new CheckoutPage(cartWithItemPage);

      await checkoutPage.startCheckout();

      await checkoutPage.fillInformation(checkoutInfo);

      await checkoutPage.finishCheckout();

      await checkoutPage.verifyOrderCompleted();
  });

});
