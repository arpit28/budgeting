

## BDD webdriverio Specs

- make sure app is running on localhost

- to run test locally run './node_modules/.bin/wdio wdio.conf.js' from the root of the project 
      
      OR

- $npm run wdioCucumber 


**Framework**

- wdio.conf.js file is added in root of the project
- e2e folder is created in the root of the project which contains 'features' and its 'steps'
- html report is generated after the test execution and can be found in e2e/reports folder
- give the path of the specific feature file in specs: which has to be run
- when wdio.conf.js called it looks at the spec to run and identifiy the correspondence stpes and spin up a selenium standalone server and execute the tests 
- negative scenario has been created in add-category.feature


**Note**

- wdio cucumber framework hs an open bug regarding dependencies missmatch of @babel hence babel-register dependency is added.
- other  "wdio-cucumber-framework": "^2.2.7",
            "wdio-selenium-standalone-service": "^0.0.10",
            "webdriverio": "^4.13.2", dependencies are added to run it with wbedriver io and cucumber.

 


