const { test, expect } = require('../fixtures/testfixtures');

test.describe('Login Tests', () => {

  test('LOGIN: Verify login with standard_user', async ({ loggedInPage }) => {
    // Login sonrası inventory sayfasının yüklenmesini bekle
    await expect(loggedInPage).toHaveURL(/inventory/);
    

  });
  

});

