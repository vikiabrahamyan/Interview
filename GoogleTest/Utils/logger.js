'use strict';
var log4js = require('./../Config/node_modules/log4js');
var log4jsGen = {
  getLogger: function getLogger() {
    log4js.loadAppender('file');
    log4js.addAppender(log4js.appenders.file('./../Logs/ExecutionLog.log'), 'logs');
    var logger = log4js.getLogger('logs');
    return logger;
  }
};

module.exports = log4jsGen;