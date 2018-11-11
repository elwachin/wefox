# surgimap test framework

Automation framework for roche using webdriverio as baseframework with extra functionalities. 
The framework uses cucumber as BBD with werbdriverio to create end to end scenarios


### Prerequisites and installation

Download the project repository with git and install the dependencies


```
npm install
```

## Running the tests

To run the automation test you need to call the webdriverio command with npm. This command will execute all the feature files in the project.
The feature files are allocated under features/step_definitions folder.
Exercises 1 and 3 are on exercise folder inside src/exercises
Important note: 
To run the exercise 1 and 3 simple use node 'filename'

```
npm test
```

## Deployment

These tests will be run in the jenkins pipeline as a new stage of this.

## Built With

* [WebdriverIo](http://webdriver.io/) - The web framework used
* [Mocha](https://mochajs.org/) - Testing mocha framework
* [Cucumberjs](https://github.com/cucumber/cucumber-js) - Cucumberjs
* [Babel](https://babeljs.io/) - Transpiler to ES6
* [Eslint](https://eslint.org/) - Linter

## Versioning

We use [SemVer](http://semver.org/) for versioning.

## Authors

* **Alan Panno** - *Initial work*
