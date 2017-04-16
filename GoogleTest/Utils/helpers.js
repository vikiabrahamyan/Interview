'use strict';
let log4jsGen = require("./../Utils/logger.js");
module.exports = class Helpers {
  static getBrowserTitle() {
    log4jsGen.getLogger().info("Helpers class call getBrowserTitle method");
    return browser.getTitle();
  }

  static getAttributeById(id, attribute) {
    log4jsGen.getLogger().info("Helpers class call getAttributeById method" );
    return element(by.id(id)).getAttribute(attribute).then(function(value) {
      return value;
    });
  }
};

