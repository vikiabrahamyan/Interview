'use strict';
let SearchPO = require('./../Pages/searchpage.js');
let WaitFor = require('./../../Utils/waiters.js');

module.exports = class SearchSteps {
   openPage() {
    this.searchPO = new SearchPO();
    this.searchPO.openPage();
  }
  getTitle() {
    return this.searchPO.getTitle();
  }

  getLogoAltAttribute() {
    return this.searchPO.getLogoAltAttribute();
  }

  getfirstItemText() {
    WaitFor.untilAppear(this.searchPO.getResultList().first());
    return this.searchPO.getResultList().first().getAttribute('text').then(function(value) {
      return value;
    })
  }

  searchText(text) {
    this.searchPO.searchText(text);
  }
};