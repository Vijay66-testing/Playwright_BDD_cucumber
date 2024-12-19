class GooglePage {
  constructor() {
    this.url = 'https://www.google.com';
  }

  async navigateToGoogle(page) {
    await page.goto(this.url, { waitUntil: 'domcontentloaded' });
  }

  async getTitle(page) {
    return await page.title();
  }
}

module.exports = GooglePage;
