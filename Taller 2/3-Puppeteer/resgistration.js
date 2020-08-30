const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://angular-6-registration-login-example.stackblitz.io/register');
  await page.waitForSelector('input[formcontrolname="firstName"]');
  await page.type('input[formcontrolname="firstName"]', 'Carlos');
  await page.type('input[formcontrolname="lastName"]', 'Blanco');
  await page.type('input[formcontrolname="username"]', 'cblanco');
  await page.type('input[formcontrolname="password"]', 'cbl3445');
  await page.click('button');
  // Add a wait for some selector on the home page to load to ensure the next step works correctly
  await page.pdf({path: 'registration.pdf', format: 'A4'});
  await browser.close();
})();