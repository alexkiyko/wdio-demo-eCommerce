const allure = require('@wdio/allure-reporter').default;

exports.config = {

    runner: 'local',

    specs: [
        './test/specs/**/*.js'
    ],

    exclude: [],

    maxInstances: 1,

    capabilities: [
        {
            maxInstances: 1,
            browserName: 'chrome',
            'goog:chromeOptions': {
                // args: ['--window-size=1920,1440'],
                excludeSwitches: ["enable-automation"],
                prefs: {
                    language: 'english'
                }
            }
        },
        // {
        //     maxInstances: 1,
        //     browserName: 'firefox',
        //     'moz:firefoxOptions': {
        //         prefs: {
        //             language: 'english'
        //         }
        //     }
        // }
    ],

    logLevel: 'error',

    bail: 0,

    baseUrl: 'http://automationpractice.com',

    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,

    services: ['selenium-standalone'],

    framework: 'mocha',

    reporters: ['spec','allure'],

    reporterOptions: {
        allure: {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }
    },

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
        compilers: ['js:@babel/register']
    },

    before: function (capabilities, specs) {
        global.allure = allure;
    },

    beforeTest: function (test, context) {
        allure.addEnvironment("BROWSER", browser.capabilities.browserName);
        allure.addEnvironment("BROWSER_VERSION", browser.capabilities.version);
        allure.addEnvironment("PLATFORM", browser.capabilities.platform);
    },

    afterTest: function(test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            browser.takeScreenshot();
        }
    }
}
