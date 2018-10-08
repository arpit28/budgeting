const { Given, When, Then } = require('cucumber');
require('chai').should();

When(/^I am on budgeting app$/, () => {
  browser.url('http://localhost:8000/budget');
  browser.pause(2000);
});

Then(/^I verify the page loads correctly$/, () => {
  const text = browser.getText('[href="/budget"]');
  const page = browser.getSource();
  expect(text).to.equal('Budget');
  expect(page).to.include('Description');
});

When(/^I navigate to reports$/, () => {
  browser.click('[href="/reports"]');
  browser.pause(2000);
  const url = browser.getUrl();
  console.log(url);
  expect(url).to.include('inflow-outflow');
});

Then(/^I verify the inflow and outflow colors$/, () => {
  const inFlowElem = $('#root > main > section > div._1GO1S > svg > g > g:nth-child(1) > rect');
  const inFlowColor = inFlowElem.getCssProperty('fill');
  expect(inFlowColor.value).to.include('rgb(44,160,44)');
  const outFlowElem = $('#root > main > section > div._1GO1S > svg > g > g:nth-child(2) > rect:nth-child(1)');
  const outFlowColor = outFlowElem.getCssProperty('fill');
  expect(outFlowColor.value).to.not.include('rgb(44,160,44)');
});
