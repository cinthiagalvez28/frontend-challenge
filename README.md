# frontend-challenge

Download the zip, unzipped the content, go to the frontend-challenge folder and once inside type:

To run all the test in all the installed browsers, run in the terminal:
```
npm run test-all-installed-browsers
```

To run all the test in a specific browser (like Chrome), run in the terminal:
```
npm run test-all-chrome
```
For Firefox, run:
```
npm run test-all-chrome
```
For Safari, run:
```
npm run test-all-chrome
```

Also, if you want to create a report, run an already showed script adding a -html-reporter at the end. Example:
```
npm run test-all-installed-browsers-html-reporter
```
A report will be created in the root of the project. Open Chrome, drag & drop the report.html file in the browser and enjoy it. (If the report.html does not create or you have any error, try to install sudo npm install -g testcafe-reporter-html)
