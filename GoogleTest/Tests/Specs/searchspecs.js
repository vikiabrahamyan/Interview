'use strict';
let Helpers = require('./../../Utils/helpers.js');
let SearchSteps = require('./../Steps/searchsteps.js');
let searchSteps = new SearchSteps();
describe('When user opens google home page', function() {
  beforeEach(function() {
    searchSteps.openPage();
  });
  it('Then title and logo is correctly loaded', function() {
    expect(searchSteps.getTitle()).toEqual(Helpers.getBrowserTitle());
    expect(searchSteps.getLogoAltAttribute()).toEqual(('Google'));
  });
});
describe('When user types protractor in text box ', function() {
  beforeEach(function() {
    searchSteps.openPage();
  });
  it('Then first result is protractor main page', function() {
    searchSteps.searchText('protractor');
    expect(searchSteps.getfirstItemText()).
        toEqual('Protractor - end-to-end testing for AngularJS');
  });
});
