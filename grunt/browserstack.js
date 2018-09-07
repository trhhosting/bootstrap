/*!
 * Bootstrap browserstack task
 * http://getbootstrap.com
 * Copyright 2014-2018 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

'use strict';

var browserstackRunner = require('browserstack-runner');
var browsers = require('./browsers');

global.logLevel = 'debug';

// jscs:disable requireCamelCaseOrUpperCaseIdentifiers
var config = {
  username: process.env.BROWSER_STACK_USERNAME,
  key: process.env.BROWSER_STACK_ACCESS_KEY,
  test_path: 'js/tests/index.html',
  test_framework: 'qunit',
  test_server_port: 3000,
  build: 'bootstrap-v3-' + new Date().toISOString(),
  browsers: browsers,
  project: 'Bootstrap v3',
  exit_with_fail: true
};

browserstackRunner.run(config, function (error, report) {
  if (error) {
    console.error(error);
    return;
  }

  console.log(JSON.stringify(report, null, 2));
  console.log('Test Finished');
});
