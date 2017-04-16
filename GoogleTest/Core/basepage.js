'use strict';
let log4jsGen = require("./../Utils/logger.js");
module.exports = class BasePO {
  constructor(url, pageTitle) {
    this.url = url;
    this.title = pageTitle;
  }
  openPage() {
    log4jsGen.getLogger().info("Opening page: " + this.url );
    browser.get(this.url);
    return this;
  }
  getPageTitle() {
    log4jsGen.getLogger().info("Page title is: " + this.title );
    return this.title;
  }
}
