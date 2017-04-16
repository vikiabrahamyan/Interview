'use strict';
let specReporter = require('jasmine-spec-reporter');
let jasmineReporters = require('jasmine-reporters');
exports.config = {
  framework: 'jasmine2',
  // runs the webDriver directly, not from Selenium Server
  directConnect: true,
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome',
    'loggingPrefs': {
      'browser': 'ALL',
    },
  },
  onPrepare: function() {
    //for non angular application
    browser.ignoreSynchronization = true;
    //reporting
    jasmine.getEnv().addReporter(new specReporter({displayStacktrace: 'all'}));
    jasmine.getEnv().
        addReporter(new jasmineReporters.JUnitXmlReporter({
          consolidateAll: true,
          savePath: '../TestReports',
          filePrefix: 'TestReports',
        }));
  },
  specs: ['../Tests/Specs/searchspecs.js'],
};