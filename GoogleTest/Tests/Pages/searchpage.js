'use strict';
let BasePO = require('./../../Core/basepage.js');
let helpers = require('./../../Utils/helpers.js');
module.exports = class  SearchPO extends BasePO {
  constructor() {
    super('http://www.google.com', 'Google');
    this.logoId = 'hplogo';
    this.searchTextboxId = 'lst-ib';
    this.searchResultCSS = 'div.rc>h3>a';
  }
  getTitle() {
    return this.getPageTitle();
  }
   getSearchTextbox() {
    return element(by.id(this.searchTextboxId));
  }

  getResultList() {
    return element.all(by.css(this.searchResultCSS));
  }

  getLogoAltAttribute() {
    return helpers.getAttributeById(this.logoId, 'alt');
  }

  searchText(text) {
    this.getSearchTextbox().sendKeys(text + protractor.Key.ENTER);
  }
}
//module.exports = new SearchPO();