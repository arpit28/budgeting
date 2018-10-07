const { Given, When, Then } = require('cucumber');

When(/^I add category on Landing Page$/, () => {
  browser.setValue('[name="description"]', 'This is an auto Test');
  browser.addValue('[name="value"]', '11');
  browser.click('button[type="submit"]');
  browser.pause(3000);
});

Then(/^I verify category is added$/, () => {
  const page = browser.getSource();
  expect(page).to.include('This is an auto Test');
});

When(/^I try to add characters in value field$/, () => {
  browser.setValue('[name="description"]', 'This is an auto Test');
  browser.addValue('[name="value"]', 'ABC');
  browser.click('button[type="submit"]');
  browser.pause(3000);
});

Then(/^I verify category is not added$/, () => {
  const page = browser.getSource();
  expect(page).to.include('ABC');
});
