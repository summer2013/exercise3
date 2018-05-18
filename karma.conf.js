// Karma configuration
<<<<<<< HEAD
// Generated on Fri May 18 2018 18:33:04 GMT+0800 (CST)
=======
// Generated on Sat Aug 05 2017 13:52:50 GMT+0800 (CST)
>>>>>>> 0cdcb00f986244b220bd64a3c5f05123fa2e2e77

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],


    // list of files / patterns to load in the browser
    files: [
<<<<<<< HEAD
	  'https://cdn.bootcss.com/jquery/2.2.4/jquery.js',
	  'node_modules/should/should.js',
      'test/*.js'
=======
      'https://cdn.bootcss.com/jquery/2.2.4/jquery.js',
      'node_modules/should/should.js',
      'test/**.js'
>>>>>>> 0cdcb00f986244b220bd64a3c5f05123fa2e2e77
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
<<<<<<< HEAD
    // browsers: ['Firefox', 'Safari', 'Chrome', 'IE'],
    browsers: ['Chrome', 'Safari'],
=======
    browsers: ['Chrome'],
>>>>>>> 0cdcb00f986244b220bd64a3c5f05123fa2e2e77


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
