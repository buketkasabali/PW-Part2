# Playwright Test Automation Project - SauceDemo

This project was developed using **JavaScript** and **Playwright** to perform end-to-end (E2E) testing on the SauceDemo website. The **Page Object Model (POM)** and custom **Fixtures** structures were used to increase sustainability in the project.

## 🚀 Features
* **Page Object Model (POM):** Page elements and methods are separated to prevent code repetition.
* **Custom Fixtures:** Automatic login processes and shopping cart preparation stages are managed through fixtures.
* **Visual Regression Testing:** Includes screenshot comparison tests for different user types.
* **Data Driven Testing:** User information and test data are managed from a central `utils/testData.js` file.

---
## 🛠️ Setup


Install dependencies:
* npm install


Install Playwright browsers:
npx playwright install

## 🧪 Run the Tests


To run all tests:



Bash


* npx playwright test


For Visual Testing (Baseline generation):
If you are running visual tests for the first time, use this to create snapshots:



Bash


* npx playwright test --update-snapshots


## 🔍 Test Scenario Details
Login Tests: The process of successfully logging in with the standard user and redirecting to the correct page is checked.

Shopping Flow: This includes sorting products by price (highest to lowest), identifying the most expensive product, adding it to the cart, and verifying it in the cart.

Checkout Process: The process of entering billing information along with the products in the cart and verifying that the order has been successfully completed is tested.

Visual Comparison: The product list screen seen by the standard_user and visual_user users is checked to see if it matches each other and the previously saved "baseline" snapshots.

## 📁 Proje Yapısı
```
standardTesting/
├── fixtures/
│   └── testfixtures.js    # Custom fixture (loggedInPage, cartWithItemPage vb.)
├── pages/                 # Page Object classes
│   ├── loginPage.js
│   ├── inventory.js
│   └── checkout.js
├── tests/                 # Test specifications (.spec.js)
│   ├── login.spec.js
│   ├── shopping-flow.spec.js
│   ├── checkout.spec.js
│   └── visual.spec.js
├── utils/
│   └── testData.js        # Test data
└── playwright.config.js   # Playwright configuration file



