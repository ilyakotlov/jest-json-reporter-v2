# Jest JSON Reporter V2

JSON test results processor for Jest. Outputs the test results in JSON format as speified in the [jest documentation](https://jestjs.io/docs/en/configuration#reporters-array-modulename-modulename-options) to a file called test-results.json (configurable)

## Setup

```
npm install --save-dev git+https://git@github.com/ilyakotlov/jest-json-reporter-v2.git
```

Then add to Jest config in the package.json 

```
...
"jest": {
  "reporters": [
    "default", 
    [
      "./node_modules/jest-json-reporter-v2",
      {
        "outputFile": "./reports/test-results.json"
      }
    ]
  ]
},
...
```

Or to the jest.config.js (here you can use variables as well)

```
...
module.exports = {
  setupTestFrameworkScriptFile: './jest.setup.js',
  verbose: true,
  reporters: [
    "default",
    ["./node_modules/jest-json-reporter-v2", {
        "outputFile": `./reports/test-results-${Date.now()}.json`
    }]
  ]
};
...
```
