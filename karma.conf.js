// Karma configuration
// Generated on Sun Dec 22 2013 17:49:21 GMT-0600 (CST)

module.exports = function(config) {
  config.set({
    basePath: '.',
    files: [
      'app/lib/angular.js',
      'app/lib/angular-*.js',
      'app/js/*.js',
      'test/*Spec.js'
    ],
    exclude : [
      'app/lib/angular-loader.js',
      'app/lib/*.min.js',
      'app/lib/angular-scenario.js'
    ],
    frameworks: ['jasmine'],
    reporters: ['progress', 'junit'],
    browsers: ['PhantomJS'],
    plugins : [
            'karma-junit-reporter',
            'karma-phantomjs-launcher',
            'karma-script-launcher',
            'karma-jasmine'
            ],
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false,
    colors: true
  });
};
