const fs = require('fs');

function JestJsonReporter (globalConfig, options) {
	this.onRunComplete = (contexts, testResult) => {
    const testResultsString = JSON.stringify(testResult);

    const outputFile = options.outputFile || './test-results.json';

    

    fs.writeFile(outputFile, testResultsString, (err) => {
      if (err) {
        console.warn('Unable to write test results JSON', err);
      }
    });

    return testResult;
	};
};

var src = JestJsonReporter;

module.exports = src;