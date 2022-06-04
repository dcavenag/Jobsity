# Jobsity

On a terminal and clone the repo `git clone https://github.com/dcavenag/Jobsity.git`

Ensure you have NPM installed first

Go to the cloned folder and install cypress using npm `npm install cypress --save-dev`

Once installed, install the dependencies running `npm i -d`

Once installed you can run the whole test suite using this command `npm run cypress:run`

This will create a new run that you can access here https://dashboard.cypress.io/projects/eoq7ig/runs

Once the test are executed you can open the last run and check the results

![Screen Shot 2022-06-04 at 17 06 13](https://user-images.githubusercontent.com/43622930/172024110-b5675284-7058-486c-8071-e82d635b5a97.png)


There should be a total of 7 tests, 5 `Passed` and 2 `Failures` beacuase of the bugs found

https://trello.com/c/kEaHf5h1/1-order-reference-field-is-not-mandatory
https://trello.com/c/f90p5mPi/2-attach-file-field-is-not-mandatory

If you want to watch the execution you can click on any test you want and click on `Watch video`

![Screen Shot 2022-06-04 at 17 07 35](https://user-images.githubusercontent.com/43622930/172024120-9396749b-b637-4d8b-892f-6572fcc44fe9.png)



