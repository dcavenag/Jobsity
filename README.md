# Jobsity

On a terminal and clone the repo `git clone https://github.com/dcavenag/Jobsity.git`

Ensure you have NPM installed first

Go to the cloned folder and install cypress using npm `npm install cypress --save-dev`

Once installed, install the dependencies running `npm i -d`

Once installed you can run the whole test suite using this command `npm run cypress:run`

This will create a new run that you can access here https://dashboard.cypress.io/projects/eoq7ig/runs

Once the test are executed you can open the last run and check the results

![Screen Shot 2022-06-04 at 18 24 57](https://user-images.githubusercontent.com/43622930/172025926-c2891cf1-a540-428c-bd70-ea8bdaf708d1.png)

There should be a total of 7 tests ran, 5 `Passed` and 2 `Failures` beacuase of the bugs listed below

https://trello.com/c/kEaHf5h1/1-order-reference-field-is-not-mandatory
https://trello.com/c/f90p5mPi/2-attach-file-field-is-not-mandatory

If you want to watch the execution you can click on any test you want and click on `Watch video`
![Screen Shot 2022-06-04 at 18 24 57](https://user-images.githubusercontent.com/43622930/172025948-e56fef1a-6fc4-4d00-a77b-cb701a8939db.png)




